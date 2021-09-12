import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { filter, find, isEmpty, map, reverse } from "lodash";
import { Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined, ClearOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { PixelsMetaverseHandleImg, PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { CanvasSlicImg } from "../pixels-metavers/CanvasSlicImg";
import { useUserInfo } from "../components/UserProvider";
import { fetchGetGoodsList, fetchGetShopList, useOutfit, useRequest, useSetConfig } from "../pixels-metavers/apiHook";
import { AvatarCard } from "../play/PersonCenter";
import { categoryData } from "../produced/Submit";

export const Controller = () => {
  const { setConfig, config, canvasRef, setPositionsArr, dealClick: { clear, value } } = usePixelsMetaverseHandleImg()

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
      {/* <Tooltip placement="right" className="mb-4 cursor-pointer" title="大格子" color="#29303d">
        <PlusCircleOutlined
          style={{
            color: config?.sizeGrid !== 20 && config?.withGrid && isEmpty(value) ? 'white' : "gray",
            cursor: config?.sizeGrid !== 20 && config?.withGrid && isEmpty(value) ? "pointer" : "no-drop"
          }}
          onClick={() => { isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 20 })) }}
        />
      </Tooltip> */}
      {/* <Tooltip placement="right" className="mb-4 cursor-pointer" title="小格子" color="#29303d">
        <MinusCircleOutlined
          style={{
            color: config?.sizeGrid !== 10 && config?.withGrid && isEmpty(value) ? 'white' : "gray",
            cursor: config?.sizeGrid !== 10 && config?.withGrid && isEmpty(value) ? "pointer" : "no-drop"
          }}
          onClick={() => { isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 10 })) }}
        />
      </Tooltip> */}
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

export const MallCore = () => {
  const { setConfig, config, canvasRef, canvas2Ref, dealClick: { setValue } } = usePixelsMetaverseHandleImg()
  const filedomRef = useRef<HTMLInputElement>(null)
  const { accounts, contract } = usePixelsMetaverseContract()
  const [src, setSrc] = useState(localStorage.getItem("imgUrl") || "")
  const [url, setUrl] = useState(src)
  const goSetConfig = useSetConfig()
  const outfit = useOutfit()
  const [data, setData] = useState<any[]>([])

  const getGoodsList = useRequest(fetchGetGoodsList)

  const { userInfo } = useUserInfo()

  useEffect(() => {
    getGoodsList({ setValue: setData })
  }, [setValue, contract])

  const { noOutfitEdList, outfitEdList } = useMemo(() => {
    if (isEmpty(userInfo?.assets)) return {
      outfitEdList: [],
      noOutfitEdList: [],
    }
    return {
      outfitEdList: filter(userInfo?.assets, item => item?.isOutfit),
      noOutfitEdList: filter(userInfo?.assets, item => !item?.isOutfit)
    }
  }, [userInfo?.assets])


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
    <div className="flex justify-between m-auto p-6 mt-4 rounded-md" style={{
      width: 1200,
      background: "rgba(225,225,225, 0.05)",
      height: "calc(100vh - 90px)",
      color: "rgba(225, 225, 225, 0.8)"
    }}>
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <div>
            <div className="mb-4">商城商品</div>
            <div className="flex flex-wrap overflow-y-scroll" style={{ height: "calc(100vh - 170px)" }}>
              {
                map(data, (item, i) => {
                  return (
                    <div key={item?.id} className="p-2 mb-4 flex-col flex" style={{
                      background: "rgba(225,225,225, 0.1)",
                      borderRadius: 5,
                      height: 216 + 100,
                      width: 216,
                      marginRight: i % 5 === 4 ? 0 : 17
                    }}>
                      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={200} style={{ borderRadius: 4, background: "#e1e1e11a", cursor: "pointer" }} />
                      <div className="flex flex-col justify-between flex-1 mt-4" style={{ fontSize: 12, width: 200 }}>
                        <div className="text-right flex-1" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name || "卡姿兰大眼睛，你值得拥有,还在等什么，快点装备我吧"}</div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex justify-between items-center">
                            <div className="p px-2 rounded-sm mr-2" style={{ background: "rgba(225, 225, 225, 0.1)" }}>ID: {item?.id}</div>
                            <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
                          </div>{accounts?.address === userInfo?.user?.account && <div className="p px-2 bg-red-500 rounded-sm cursor-pointer" onClick={() => {
                            outfit({
                              id: [Number(item?.id)],
                              index: item?.index,
                              isOutfit: true
                            })
                          }}>{"购买"}</div>}
                        </div>
                        {item?.name && <div className="p rounded-sm mt-2 overflow-x-scroll" style={{ height: 20, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name}</div>}
                      </div>
                  </div>)
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Mall = () => {
  return (
    <PixelsMetaverseHandleImgProvider size={240} showGrid data={{
      positions: [],
      size: 'large',
      bgColor: "#083f35",
      gridColor: "#ffffff",
    }}>
      <div className="flex w-full">
        <MallCore />
      </div>
    </PixelsMetaverseHandleImgProvider>
  )
}