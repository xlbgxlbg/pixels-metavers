import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { isEmpty } from "lodash";
import { Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined, ClearOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { SubminNFT } from "./Submit";
import { PixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversImg";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { CanvasSlicImg } from "../pixels-metavers/CanvasSlicImg";

export const Controller = () => {
  const { setConfig, config, canvasRef, setPositionsArr, dealClick: { clear, value } } = usePixelsMetaverseHandleImg()

  console.log(config?.sizeGrid, config?.withGrid, isEmpty(value), value, "config?.sizeGrid !== 20 && config?.withGrid && isEmpty(value)")

  return (
    <div
      className="flex flex-col items-center text-gray-300 absolute py-4"
      style={{
        fontSize: 20,
        height: 480,
        width: 30,
        left: (canvasRef?.current?.offsetLeft || 30) - 30,
        top: canvasRef?.current?.offsetTop,
        boxShadow: "0px 0px 10px rgba(225,225,225,0.3)"
      }}
    >
      <Tooltip placement="right" className="mb-4 cursor-pointer" title="大格子" color="#29303d">
        <PlusCircleOutlined
          style={{
            color: config?.sizeGrid !== 20 && config?.withGrid && isEmpty(value) ? 'white' : "gray",
            cursor: config?.sizeGrid !== 20 && config?.withGrid && isEmpty(value) ? "pointer" : "no-drop"
          }}
          onClick={() => { isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 20 })) }}
        />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title="小格子" color="#29303d">
        <MinusCircleOutlined
          style={{
            color: config?.sizeGrid !== 10 && config?.withGrid && isEmpty(value) ? 'white' : "gray",
            cursor: config?.sizeGrid !== 10 && config?.withGrid && isEmpty(value) ? "pointer" : "no-drop"
          }}
          onClick={() => { isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 10 })) }}
        />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={`${config?.withGrid ? "隐藏" : "显示"}辅助线`} color="#29303d" >
        <AppstoreOutlined style={{ color: config?.withGrid ? 'white' : "gray" }} onClick={() => {
          setConfig((pre) => ({ ...pre, withGrid: !config?.withGrid }))
        }} />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={`清除画布`} color="#29303d">
        <ClearOutlined style={{ color: !isEmpty(value) ? 'white' : "gray" }} onClick={() => {
          clear()
          setPositionsArr([])
        }} />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={`选择绘制颜色`} color="#29303d">
        <input type="color" name="颜色" id="" style={{ width: 20 }} onChange={(e) => {
          setConfig((pre) => ({ ...pre, drawColor: e.target.value }))
        }} />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={`丢弃选取的颜色`} color="#29303d">
        <DeleteOutlined style={{ color: !isEmpty(config?.drawColor) ? 'white' : "gray" }} onClick={() => { setConfig((pre) => ({ ...pre, drawColor: "" })) }} />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={`调整背景色`} color="#29303d">
        <input type="color" name="颜色" id="" style={{ width: 20 }} onChange={(e) => {
          setConfig((pre) => ({ ...pre, bgColor: e.target.value }))
        }} />
      </Tooltip>
      <Tooltip placement="right" className="mb-4 cursor-pointer" title={() => {
        return (<div style={{ fontSize: 12 }}>
          <div>1.格子大小只能在清除绘制画布数据后调整</div>
          <div>2.清除画布数据会导致之前所有绘制丢失</div>
          <div>3.选择了绘制颜色后，将不会从当前选中地方取色</div>
          <div>4.丢弃当前选中色后，绘制的颜色将是点击处颜色</div>
          <div>5.背景色仅仅为了方便查看，不会提交至区块链</div>
          <div>6.双击即可删除当前位置数据</div>
        </div>)
      }} color="#29303d">
        <ExclamationCircleOutlined />
      </Tooltip>
    </div>
  )
}

export const ProducedCore = () => {
  const { setConfig, config, canvasRef, canvas2Ref, dealClick: { setValue } } = usePixelsMetaverseHandleImg()
  const filedomRef = useRef<HTMLInputElement>(null)
  const [src, setSrc] = useState(localStorage.getItem("imgUrl") || "")
  const [url, setUrl] = useState(src)

  //上传图片
  const fileOnChange = useCallback(() => {
    const filedom = filedomRef.current
    if (filedom && filedom?.files) {
      const file = filedom?.files[0];
      if (!file.type.match("image.*")) {
        return
      }
      let reader = new FileReader()
      reader.onload = function () {
        let bytes = this.result
        let img = new Image()
        img.src = "" + bytes
        img.onload = function () {
          setValue({})
          setConfig((pre) => ({ ...pre, bgImg: img }))
        }
      }
      reader.readAsDataURL(file)
    }
  }, [filedomRef])

  const onLoadImg = (src: string) => {
    let img = new Image()
    img.src = src
    img.crossOrigin = ""
    img.onload = function () {
      setValue({})
      setConfig((pre) => ({ ...pre, bgImg: img }))
    }
  }

  useEffect(() => {
    localStorage.setItem("imgUrl", url)
    onLoadImg(src)
  }, [src])

  return (
    <div className="flex w-full">
      <div className="flex w-full p-8 justify-between">
        <div>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden onChange={fileOnChange} ref={filedomRef} />
          <div className="my-4 flex items-center justify-between" style={{
            width: config?.imgSize.width,
            borderRadius: 4,
            height: 40,
            color: "white",
          }}>
            <div className="flex items-center justify-between"
              style={{
                width: (config?.imgSize.width || 480) - 100,
                background: "rgba(255, 255, 255, 0.1)",
                height: 40, borderTopLeftRadius: 4, borderBottomLeftRadius: 4
              }}>
              <input
                className="py-2 pl-4 mr-2 bg-transparent search"
                style={{ width: (config?.imgSize.width || 480) - 240, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
                placeholder="请输入图片链接"
                value={url}
                onChange={(e) => { setUrl(e.target.value) }}
              />
              {url && <CloseCircleOutlined onClick={() => { setUrl("") }} />}
              <div className="flex items-center justify-center h-full bg-red-500 cursor-pointer"
                style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, width: 100 }}
                onClick={() => {
                  setSrc(url);
                  if (!url) {
                    setConfig((pre) => ({ ...pre, bgImg: null }))
                  }
                }}>导入图片</div>
            </div>
            <div className="flex items-center justify-center h-full bg-red-500 cursor-pointer ml-2"
              style={{ borderRadius: 4, width: 100 }}
              onClick={() => { setSrc(url); /* add("haahhatest") */ }}><label htmlFor="avatar" className="cursor-pointer">上传文件</label></div>
          </div>
          <div>
            <Controller />
            <div className="flex">
              {config?.bgImg && <PixelsMetaverseHandleImg
                canvasRef={canvasRef}
                showBgImg
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: "cell",
                  boxShadow: "0px 0px 10px rgba(225,225,225,0.3)",
                  zIndex: 1000
                }} />}

              {config?.bgImg && <CanvasSlicImg img={config?.bgImg} sizeGrid={config?.sizeGrid} />}

              <PixelsMetaverseHandleImg
                canvasRef={canvas2Ref}
                showGridColor
                style={{
                  backgroundColor: config.bgColor || "rgba(17, 24, 39, 1)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: "cell",
                  boxShadow: "0px 0px 10px rgba(225,225,225,0.3)"
                }} />
            </div>
          </div>
        </div>
        <SubminNFT />
      </div>
    </div>
  )
}

export const Produced = () => {
  return (
    <PixelsMetaverseHandleImgProvider size={480} showGrid handDraw data={{
      positions: [],
      size: 'large',
      bgColor: "transparent",
      gridColor: "rgba(225,225,225,0.7)",
    }}>
      <div className="flex w-full">
        <ProducedCore />
      </div>
    </PixelsMetaverseHandleImgProvider>
  )
}