import message from "antd/lib/message";
import { cloneDeep, find, isEmpty, map } from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import { createReturn } from "typescript";
import { useUserInfo } from "../components/UserProvider";
import { fetchBuyGoods, fetchGetGoodsInfo, fetchOutfit, useRequest } from "../pixels-metavers/apiHook";
import { PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";
import { categoryData } from "../produced/Submit";

export const AvatarCard = ({ item, type }: {
  item: any, type: string
}) => {
  const { accounts } = usePixelsMetaverseContract()
  const { setSelectList } = usePixelsMetaverseHandleImg()
  const { search } = useLocation()
  const address = search ? search.split("=")[1] : accounts?.address
  const { setGoodsList } = useUserInfo()

  const outfit = useRequest(fetchOutfit, {
    onSuccess: () => {
      message.success("设置成功！")
    }
  }, [address])

  const buyGoods = useRequest(fetchBuyGoods, {
    onSuccess: () => {
      message.success("购买成功！")
    }
  }, [address])
  const { userInfo } = useUserInfo()

  return (
    <div key={item?.id + accounts?.newworkId} className="mt-2 item-avatar p-2 flex justify-between border-gray-500 border-b">
      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={96}
        style={{ borderRadius: 4, background: item?.bgColor || userInfo?.user?.bgColor || "#e1e1e11a", cursor: 'pointer', boxShadow: "0px 0px 5px rgba(225,225,225,0.3)" }}
        onClick={() => {
          console.log(item.data, "item.data")
          setSelectList((pre: any) => {
            const list = cloneDeep(pre) as string[]
            const index = list.indexOf(item?.data)
            if (index >= 0) {
              list.splice(index, 1)
            } else {
              list.push(item.data)
            }
            return list
          })
        }}
      />
      <div className="flex justify-end flex-1">
        <div className="ml-2 flex flex-col justify-between items-end">
          <div className="text-right" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name}</div>
          <div className="flex justify-between items-center mt-2">
            <div className="p px-2 rounded-sm mr-2" style={{ background: "rgba(225, 225, 225, 0.1)" }}>ID: {item?.id}</div>
            <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
          </div>
          {accounts?.address === item?.owner && type === "assets" && <div className="p px-4 bg-red-500 rounded-sm cursor-pointer mt-2" onClick={() => {
            outfit({
              value: {
                id: Number(item?.id),
                index: item?.index,
                isOutfit: !item?.isOutfit,
              },
              setGoodsList
            })
          }}>{item?.isOutfit ? "移除" : "配置"}</div>}

          {type === "buyGoods" && <div className="flex justify-between items-center mt-2">
            <div className="p px-2 rounded-sm ml-2 mr-2" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{Number(item?.price) / (10 ** 18)}ETH</div>
            <button className="p px-4 bg-red-500 rounded-sm cursor-pointer"
              style={{ background: item?.isSale ? "rgba(239, 68, 68)" : "rgba(225,225,225, 0.1)" }}
              onClick={() => {
                buyGoods({
                  id: Number(item?.id),
                  price: Number(item?.price),
                  setGoodsList
                })
              }}
              disabled={!item?.isSale}>{item?.isSale ? "购买" : "已出售"}</button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export const NoData = () => {
  return <div className="flex justify-center items-center h-full w-full">
    暂无数据
</div>
}

export const PersonCenter = ({ outfitEdList, noOutfitEdList }: { noOutfitEdList: any[], outfitEdList: any[] }) => {
  const history = useHistory()
  const { search } = useLocation()
  const address = search ? search.split("=")[1] : ""

  return (
    <div className="border m-4 p-4 card">
      <div className="mb-2 flex justify-between">
        <div>个人中心</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push(`/person-center${address ? "?address=" + address : ""}`) }}>查看更多</div>
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