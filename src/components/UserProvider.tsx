import { Dictionary, isEmpty } from "lodash";
import * as React from "react";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext, Dispatch } from "react";
import { fetchGetGoodsIdList, fetchGetGoodsInfo, fetchUserInfo, useRequest } from "../pixels-metavers/apiHook";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";

export const UserInfoContext = createContext(
  {} as {
    userInfo: any;
    setUserInfo: Dispatch<any>;
    goodsList: any[];
    setGoodsList: Dispatch<any[]>;
    goodsId?: number;
    setGoodsId: Dispatch<React.SetStateAction<number | undefined>>
  },
);

export const useUserInfo = () => useContext(UserInfoContext);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<Dictionary<any>>({});
  const [goodsList, setGoodsList] = useState<any[]>([]);
  const [goodsId, setGoodsId] = useState<number | undefined>();
  const { accounts, contract } = usePixelsMetaverseContract()
  const getUserInfo = useRequest(fetchUserInfo)

  useEffect(() => {
    if (isEmpty(accounts?.address)) return
    getUserInfo({ address: accounts?.address, setUserInfo })
  }, [accounts?.address, contract])

  const getGoodsIdList = useRequest(fetchGetGoodsIdList)

  useEffect(() => {
    getGoodsIdList({ setValue: setGoodsList })
  }, [accounts?.address, contract])

  console.log(accounts?.networkId, "accounts?.networkIDaccounts?.networkId", accounts?.address)

  useEffect(() => {
    if (isEmpty(accounts?.networkId)) return
    setGoodsList([])
    getGoodsIdList({ setValue: setGoodsList, newNumber: -1 })
  }, [accounts?.networkId])

  /* useEffect(()=>{
    if(!goodsId) return
    getGoodsInfo({ id: goodsId, setGoodsList })
  }, [goodsId]) */

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo, goodsList, setGoodsList, goodsId, setGoodsId }}>
      {children}
    </UserInfoContext.Provider>
  )
}