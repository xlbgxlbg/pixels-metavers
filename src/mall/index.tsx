import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { filter, find, isEmpty, map, reverse } from "lodash";
import { message, Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined, ClearOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { PixelsMetaverseHandleImg, PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { CanvasSlicImg } from "../pixels-metavers/CanvasSlicImg";
import { useUserInfo } from "../components/UserProvider";
import { fetchBuyGoods, fetchGetGoodsList, fetchGetShopList, useOutfit, useRequest, useSetConfig } from "../pixels-metavers/apiHook";
import { AvatarCard, NoData } from "../play/PersonCenter";
import { categoryData } from "../produced/Submit";
import { useHistory } from "react-router";

export const MallCore = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const { accounts, contract } = usePixelsMetaverseContract()
  const [data, setData] = useState<any[]>([])
  const buyGoods = useRequest(fetchBuyGoods, {
    onSuccess: () => {
      message.success("购买成功！")
      getGoodsList({ setValue: setData })
    }
  }, [setData])
  const history = useHistory()

  const getGoodsList = useRequest(fetchGetGoodsList)
  const { userInfo } = useUserInfo()

  useEffect(() => {
    getGoodsList({ setValue: setData })
  }, [setData, contract])

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

  return (
    <div className="flex justify-between m-auto p-6 mt-4 rounded-md" style={{
      width: 1200,
      background: "rgba(225,225,225, 0.05)",
      height: "calc(100vh - 90px)",
      color: "rgba(225, 225, 225, 0.8)"
    }}>
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <div className="h-full">
            <div className="mb-4">商城商品</div>
            {!isEmpty(data) ? <div className="flex flex-wrap overflow-y-scroll" style={{ height: "calc(100vh - 170px)" }}>
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
                      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={200} style={{ borderRadius: 4, background: item?.bgColor || userInfo?.user?.bgColor || "#e1e1e11a", cursor: "pointer", boxShadow: "0px 0px 5px rgba(225,225,225,0.3)" }} />
                      <div className="flex flex-col justify-between flex-1 mt-4" style={{ fontSize: 12, width: 200 }}>
                        <div className="text-right flex-1" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name || "卡姿兰大眼睛，你值得拥有,还在等什么，快点装备我吧"}</div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex justify-between items-center">
                            <div className="p px-2 rounded-sm mr-2" style={{ background: "rgba(225, 225, 225, 0.1)" }}>ID: {item?.id}</div>
                            <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
                          </div>
                          <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{Number(item?.price)/(10**18)}ETH</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          {item?.owner && <div className="p rounded-sm overflow-x-scroll hover:text-red-500 cursor-pointer" 
                          style={{ height: 20, width: 130,textOverflow: "ellipsis", overflow: "hidden" }}
                          onClick={()=>{
                            history.push(`/person-center?address=${item?.owner}`)
                          }}
                          >{item?.owner}</div>}
                          <button className="p px-2 bg-red-500 rounded-sm cursor-pointer" style={{ background: item?.isSale ? "rgba(239, 68, 68)" : "rgba(225,225,225, 0.1)", width: 60 }} onClick={() => {
                            buyGoods({
                              id: Number(item?.id),
                              goodsIndex: Number(item?.index),
                              shopIndex: Number(item?.shopIndex),
                              price: Number(item?.price)
                            })
                          }}
                            disabled={!item?.isSale}>{item?.isSale ? "购买" : "已出售"}</button>
                        </div>
                      </div>
                    </div>)
                })
              }
            </div> : <NoData />}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Mall = () => {
  return (
    <MallCore />
  )
}