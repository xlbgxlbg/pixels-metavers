import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { filter, find, isEmpty, map } from "lodash";
import { message, Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined, ClearOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { PixelsMetaverseHandleImg, PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { CanvasSlicImg } from "../pixels-metavers/CanvasSlicImg";
import { useUserInfo } from "../components/UserProvider";
import { fetchRegister, useOutfit, useRegister, useRequest, useSetConfig } from "../pixels-metavers/apiHook";
import { AvatarCard } from "../play/PersonCenter";

export const PersonCenterCore = () => {
  const { setConfig, config, canvasRef, canvas2Ref, dealClick: { setValue } } = usePixelsMetaverseHandleImg()
  const filedomRef = useRef<HTMLInputElement>(null)
  const { accounts } = usePixelsMetaverseContract()
  const [src, setSrc] = useState(localStorage.getItem("imgUrl") || "")
  const [url, setUrl] = useState(src)
  const goSetConfig = useSetConfig()
  const fetch = useRequest(fetchRegister, {
    onSuccess: () => {
      message.success("激活账户成功！")
    }
  })

  const { userInfo } = useUserInfo()

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
      <div className="pr-8 mr-4 border-r" style={{ borderColor: "rgba(225,225,225, 0.3" }}>
        <PixelsMetaverseHandleImg
          canvasRef={canvas2Ref}
          showGridColor
          style={{
            backgroundColor: config.bgColor || "rgba(17, 24, 39, 1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            cursor: "cell",
            boxShadow: "0px 0px 10px rgba(225,225,225,0.3)",
            borderRadius: "50%",
            marginBottom: 10
          }} />
        <div className="overflow-y-scroll" style={{ height: "calc(100% - 240px)" }}>
          <div className="flex justify-between items-center mt-8">
            <div>账户</div>
            <div className="overflow-x-scroll" style={{ width: 180 }}>{userInfo?.user?.account}</div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>类型</div>
            {!userInfo?.user?.account?.includes("0000000000000000000000000") && <div>{userInfo?.user?.isMerchant ? "商户" : "用户"}</div>}
            {userInfo?.user?.account?.includes("0000000000000000000000000") && <div className="cursor-pointer text-red-500" onClick={fetch}>去激活账户</div>}
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>显示辅助线</div>
            <AppstoreOutlined style={{ color: config?.withGrid ? 'white' : "gray", fontSize: 22 }} onClick={() => {
              setConfig((pre) => ({ ...pre, withGrid: !config?.withGrid }))
            }} />
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>辅助线颜色</div>
            <input type="color" name="颜色" value={config?.gridColor} id="" style={{ width: 40, cursor: "pointer" }} onChange={(e) => {
              setConfig((pre) => ({ ...pre, gridColor: e.target.value }))
            }} />
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>背景色</div>
            <input type="color" value={config?.bgColor} name="颜色" id="" style={{ width: 40, cursor: "pointer" }} onChange={(e) => {
              setConfig((pre) => ({ ...pre, bgColor: e.target.value }))
            }} />
          </div>
          <button className="flex items-center mt-4 justify-center bg-red-500 cursor-pointer h-10 w-full hover:text-white"
            style={{ borderRadius: 4 }}
            disabled={accounts?.address !== userInfo?.user?.account}
            onClick={() => {
              goSetConfig({
                bgColor: config?.bgColor,
                gridColor: config?.gridColor,
                withGrid: config?.withGrid,
                index: userInfo?.user?.index
              })
            }}
          >{accounts?.address === userInfo?.user?.account ? "更新设置" : "非当前连接账户"}</button>
        </div>
      </div>
      <div className="flex-1 flex justify-between">
        {(!isEmpty(outfitEdList) || !isEmpty(noOutfitEdList)) && <div className="overflow-y-scroll flex-1 pr-4 border-r mr-4" style={{ borderColor: "rgba(225,225,225, 0.3" }}>
          {!isEmpty(outfitEdList) && <div className="pb-8">
            <div className="">已使用</div>
            {
              map(outfitEdList, item => {
                return <AvatarCard key={item?.id} item={item} />
              })
            }
          </div>}
          {!isEmpty(noOutfitEdList) && <div>
            <div className="">未使用</div>
            {
              map(noOutfitEdList, item => {
                return (<AvatarCard key={item?.id} item={item} />)
              })
            }
          </div>}
        </div>}
        {userInfo?.user?.isMerchant && <div className="flex-1">
          <div>
            <div className="">店铺商品</div>
            {
              map(noOutfitEdList, item => {
                //item.data?.split("-").pop()
                return (<div key={item?.id} className="mt-2 item-avatar p-2">
                  <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={96} style={{ borderRadius: 4, background: "#638496" }} />
                </div>)
              })
            }
          </div>
        </div>}
      </div>
    </div>
  )
}

export const PersonCenter = () => {
  return (
    <PixelsMetaverseHandleImgProvider size={240} showGrid data={{
      positions: [],
      size: 'large',
      bgColor: "#083f35",
      gridColor: "#ffffff",
    }}>
      <div className="flex w-full">
        <PersonCenterCore />
      </div>
    </PixelsMetaverseHandleImgProvider>
  )
}