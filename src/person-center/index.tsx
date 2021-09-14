import { useMemo } from "react"
import { filter, isEmpty, map } from "lodash";
import { message } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { PixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversImg";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { fetchRegister, fetchSetConfig, fetchUserInfo, useRequest } from "../pixels-metavers/apiHook";
import { AvatarCard, NoData } from "../play/PersonCenter";
import { useGetPositionStr } from "../pixels-metavers/canvasHook";
import { useLocation } from "react-router";
import { useUserInfo } from "../components/UserProvider";

export const PersonCenterCore = ({ outfitEdList, noOutfitEdList }: {
  noOutfitEdList: any[], outfitEdList: any[]
}) => {
  const { setConfig, config, canvas2Ref } = usePixelsMetaverseHandleImg()
  const { accounts } = usePixelsMetaverseContract()
  const { search } = useLocation()
  const { userInfo, setUserInfo, goodsList } = useUserInfo()
  const address = search ? search.split("=")[1] : accounts.address
  const getUserInfo = useRequest(fetchUserInfo)

  const getInfo = () => {
    if (isEmpty(address)) return
    getUserInfo({ address, setUserInfo })
  }

  const goSetConfig = useRequest(fetchSetConfig, {
    onSuccess: () => {
      message.success("更新信息成功！")
      getInfo()
    }
  }, [config, address])

  const fetch = useRequest(fetchRegister, {
    onSuccess: () => {
      message.success("激活账户成功！")
      getInfo()
    }
  }, [address])

  const shopGoods = useMemo(() => filter(goodsList, item => item?.owner === address && item?.isSale), [goodsList])

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
            <div className="overflow-x-scroll" style={{ width: 180 }}>{userInfo?.account || "0x000000000000000000000000000000000000000000000000000"}</div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>类型</div>
            {!userInfo?.account?.includes("0000000000000000000000000") && <div>{userInfo?.isMerchant ? "商户" : "用户"}</div>}
            {userInfo?.account?.includes("0000000000000000000000000") && <div className="cursor-pointer text-red-500" onClick={fetch}>去激活账户</div>}
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
            disabled={address?.toUpperCase() !== accounts?.address?.toUpperCase()}
            onClick={() => {
              goSetConfig({
                value: {
                  bgColor: config?.bgColor,
                  gridColor: config?.gridColor,
                  withGrid: config?.withGrid
                }
              })
            }}
          >{address?.toUpperCase() === accounts?.address?.toUpperCase() ? "更新设置" : "不可更新设置"}</button>
        </div>
      </div>
      { (!isEmpty(outfitEdList) || !isEmpty(noOutfitEdList) || !isEmpty(shopGoods)) ? <div className="flex-1 flex justify-between">
        {(!isEmpty(outfitEdList) || !isEmpty(noOutfitEdList)) && <div className="overflow-y-scroll flex-1 pr-4 border-r mr-4" style={{ borderColor: "rgba(225,225,225, 0.3" }}>
          {!isEmpty(outfitEdList) && <div className="pb-8">
            <div className="">已使用</div>
            {
              map(outfitEdList, item => {
                return <AvatarCard key={item?.id} item={item} type="assets" />
              })
            }
          </div>}
          {!isEmpty(noOutfitEdList) && <div>
            <div className="">未使用</div>
            {
              map(noOutfitEdList, item => {
                return (<AvatarCard key={item?.id} item={item} type="assets" />)
              })
            }
          </div>}
        </div>}
        {!isEmpty(shopGoods) && <div className="flex-1 overflow-y-scroll">
          <div>
            <div className="">店铺商品</div>
            {
              map(shopGoods, item => {
                return (<AvatarCard key={item?.id} item={item} type="buyGoods" />)
              })
            }
          </div>
        </div>}
      </div> : <NoData />}
    </div>
  )
}

export const PersonCenter = () => {
  const { accounts } = usePixelsMetaverseContract()
  const { goodsList, userInfo } = useUserInfo()
  const { search } = useLocation()
  const address = search ? search.split("=")[1] : accounts.address

  const { noOutfitEdList, outfitEdList } = useMemo(() => {
    if (isEmpty(goodsList)) return {
      outfitEdList: [],
      noOutfitEdList: [],
    }
    return {
      outfitEdList: filter(goodsList, item => !item?.isSale && item?.isOutfit && item?.owner === address),
      noOutfitEdList: filter(goodsList, item => !item?.isSale && !item?.isOutfit && item?.owner === address)
    }
  }, [goodsList, address])

  const positions = useGetPositionStr(outfitEdList)

  return (
    !isEmpty(userInfo) && positions ? <PixelsMetaverseHandleImgProvider size={240} showGrid={userInfo?.withGrid} data={{
      positions: positions,
      size: 'large',
      bgColor: userInfo?.bgColor,
      gridColor: userInfo?.gridColor,
    }}>
      <div className="flex w-full">
        <PersonCenterCore outfitEdList={outfitEdList} noOutfitEdList={noOutfitEdList} />
      </div>
    </PixelsMetaverseHandleImgProvider>: <div className="flex justify-center item-center text-white mt-60">请链接钱包</div>
  )
}