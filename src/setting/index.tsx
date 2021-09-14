import { Dictionary, filter, find, groupBy, isEmpty, keys, map, orderBy, sortBy } from "lodash";
import { message, Select } from "antd";
import { PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { useUserInfo } from "../components/UserProvider";
import { fetchBuyGoods, useRequest } from "../pixels-metavers/apiHook";
import { NoData } from "../play/PersonCenter";
import { categoryData } from "../produced/Submit";
import { useHistory } from "react-router";
import { useMemo, useState } from "react";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
const { Option } = Select;

export const Mall = () => {
  const { goodsList, setGoodsList } = useUserInfo()
  const { accounts } = usePixelsMetaverseContract()
  const [{
    sort,
    owner,
    sale,
    category
  }, setList] = useState<Dictionary<any>>({
    sort: "",
    owner: "",
    sale: "",
    category: ""
  })

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
            <div><input type="text" placeholder="设置" value={sort} onChange={(e)=>{ setList((pre)=>({ ...pre, sort: e.target.value })) }}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}