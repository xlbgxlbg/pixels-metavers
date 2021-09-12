import { filter, isEmpty, map, reverse } from "lodash";
import React, { Dispatch, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchBuyGoods, fetchGetGoodsList, useRequest } from "../pixels-metavers/apiHook";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { AvatarCard, NoData } from "./PersonCenter";

export const Merchants = ({ setAssetsInfo }: { setAssetsInfo: Dispatch<React.SetStateAction<any[]>>, }) => {
  const history = useHistory()
  const [data, setData] = useState<any[]>([])
  const { accounts, contract } = usePixelsMetaverseContract()

  const getGoodsList = useRequest(fetchGetGoodsList)

  useEffect(() => {
    getGoodsList({ setValue: setData, to: 10 })
  }, [setData, contract])

  return (
    <div className="border m-4 p-4 card" style={{ boxShadow: "5px 5px 10px rgba(225,225,225,0.3)" }}>
      <div className="mb-2 flex justify-between">
        <div>热门商品</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push("/mall") }}>查看更多</div>
      </div>
      { !isEmpty(filter(data, ite=>ite?.isSale)) ? <div className="overflow-y-scroll" style={{ height: "calc(100% - 30px)" }}>
        {
          map(filter(data, ite=>ite?.isSale), item => {
            return <AvatarCard key={item?.id} item={item} type={"buyGoods"} setGoodsInfo={setData} setAssetsInfo={setAssetsInfo} />
          })
        }
      </div> : <NoData />}
    </div>
  );
};