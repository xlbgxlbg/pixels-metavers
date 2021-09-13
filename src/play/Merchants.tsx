import { filter, isEmpty, map } from "lodash";
import { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUserInfo } from "../components/UserProvider";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { AvatarCard, NoData } from "./PersonCenter";

export const Merchants = () => {
  const history = useHistory()
  const { accounts } = usePixelsMetaverseContract()
  const { search } = useLocation()
  const address = search ? search.split("=")[1] : accounts.address
  const { goodsList } = useUserInfo()
  const shopGoods = useMemo(() => filter(goodsList, item => item?.isSale), [goodsList])

  return (
    <div className="border m-4 p-4 card" style={{ boxShadow: "5px 5px 10px rgba(225,225,225,0.3)" }}>
      <div className="mb-2 flex justify-between">
        <div>热门商品</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push("/mall") }}>查看更多</div>
      </div>
      { !isEmpty(shopGoods) ? <div className="overflow-y-scroll" style={{ height: "calc(100% - 30px)" }}>
        {
          map(shopGoods, item => {
            return <AvatarCard key={item?.id} item={item} type={"homeBuyGoods"} />
          })
        }
      </div> : <NoData />}
    </div>
  );
};