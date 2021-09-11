import { filter, find, isEmpty, last, map } from "lodash";
import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useUserInfo } from "../components/UserProvider";
import { useOutfit } from "../pixels-metavers/apiHook";
import { PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { categoryData } from "../produced/Submit";

export const AvatarCard = ({ item }: { item: any }) => {
  const { accounts } = usePixelsMetaverseContract()
  const outfit = useOutfit()

  const { userInfo } = useUserInfo()
  return (
    <div key={item?.id + 1} className="mt-2 item-avatar p-2 flex justify-between border-gray-500 border-b">
      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={96}
        style={{ borderRadius: 4, background: "#638496", cursor: 'pointer' }} />
      <div className="ml-2 flex flex-col justify-between items-end">
        <div className="text-right" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name || "卡姿兰大眼睛，你值得拥有,还在等什么，快点装备我吧"}</div>
        <div className="p px-2 rounded-sm" style={{ fontSize: 12, background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
        {accounts?.address === userInfo?.user?.account && <div className="p px-4 bg-red-500 rounded-sm cursor-pointer" onClick={() => {
          outfit({
            id: [Number(item?.id)],
            index: item?.index,
            isOutfit: true
          })
        }}>{item?.isOutfit ? "移除" : "配置"}</div>}
      </div>
    </div>
  )
}

export const PersonCenter = () => {
  const history = useHistory()
  const { userInfo } = useUserInfo()
  const outfit = useOutfit()

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
    <div className="border m-4 p-4 card">
      <div className="mb-2 flex justify-between">
        <div>个人中心</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push("/person-center") }}>查看更多</div>
      </div>
      {(!isEmpty(outfitEdList) || !isEmpty(noOutfitEdList)) && <div className="overflow-y-scroll" style={{ height: "calc(100% - 30px)" }}>
        <div className="mt-2 pb-4">
          <div className="">已使用</div>
          {
            map(outfitEdList, item => {
              return <AvatarCard item={item} />
            })
          }
        </div>
        <div className="mt-4">
          <div className="">未使用</div>
          {
            map(noOutfitEdList, item => {
              //item.data?.split("-").pop()
              return <AvatarCard item={item} />
            })
          }
        </div>
      </div>}
    </div>
  );
};