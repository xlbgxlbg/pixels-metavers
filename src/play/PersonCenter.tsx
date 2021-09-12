import { divide, filter, find, isEmpty, last, map } from "lodash";
import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserInfo } from "../components/UserProvider";
import { fetchBuyGoods, fetchGetUserAssets, fetchOutfit, useOutfit, useRequest } from "../pixels-metavers/apiHook";
import { PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { categoryData } from "../produced/Submit";

export const AvatarCard = ({ item, type }: { item: any, type: string }) => {
  const { accounts } = usePixelsMetaverseContract()
  const outfit = useRequest(fetchOutfit)
  const buyGoods = useRequest(fetchBuyGoods)
  const { userInfo } = useUserInfo()

  return (
    <div key={item?.id + 1} className="mt-2 item-avatar p-2 flex justify-between border-gray-500 border-b">
      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={96}
        style={{ borderRadius: 4, background: item?.bgColor || userInfo?.user?.bgColor || "#638496", cursor: 'pointer', boxShadow:  "0px 0px 5px rgba(225,225,225,0.3)" }} />
      <div className="ml-2 flex flex-col justify-between items-end">
        <div className="text-right" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name}</div>
        <div className="p px-2 rounded-sm" style={{ fontSize: 12, background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
        {accounts?.address === item?.owner && type === "assets" && <div className="p px-4 bg-red-500 rounded-sm cursor-pointer" onClick={() => {
          outfit({
            value: {
              id: Number(item?.id),
              index: item?.index,
              isOutfit: !item?.isOutfit
            }
          })
        }}>{item?.isOutfit ? "移除" : "配置"}</div>}
        {type === "buyGoods" && <button className="p px-4 bg-red-500 rounded-sm cursor-pointer" onClick={() => {
          buyGoods({
            id: Number(item?.id),
            goodsIndex: Number(item?.index),
            shopIndex: Number(item?.shopIndex),
            price: Number(item?.price)
          })
        }}
          disabled={!item?.isSale}>{item?.isSale ? "购买" : "已出售"}</button>}
      </div>
    </div>
  )
}

export const NoData = () => {
  return <div className="flex justify-center items-center h-full w-full">
    暂无数据
</div>
}

export const PersonCenter = ({ outfitEdList, noOutfitEdList, }: { noOutfitEdList: any[], outfitEdList: any[] }) => {
  const history = useHistory()
  const { userInfo } = useUserInfo()

  return (
    <div className="border m-4 p-4 card">
      <div className="mb-2 flex justify-between">
        <div>个人中心</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push("/person-center") }}>查看更多</div>
      </div>
      {(!isEmpty(outfitEdList) || !isEmpty(noOutfitEdList)) ? <div className="overflow-y-scroll" style={{ height: "calc(100% - 30px)" }}>
        <div className="mt-2 pb-4">
          <div className="">已使用</div>
          {
            map(outfitEdList, item => {
              return <AvatarCard key={item?.id} item={item} type="assets" />
            })
          }
        </div>
        <div className="mt-4">
          <div className="">未使用</div>
          {
            map(noOutfitEdList, item => {
              return <AvatarCard key={item?.id} item={item} type="assets" />
            })
          }
        </div>
      </div> : <NoData />}
    </div>
  );
};