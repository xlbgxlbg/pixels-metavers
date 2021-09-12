import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { useConvertedPostion, useGetPositionData } from "../pixels-metavers/canvasHook";
import { Dictionary, filter, groupBy, isEmpty, map } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useUserInfo } from "../components/UserProvider";
import { fetchGetUserAssets, fetchUserBaseInfo, useRequest } from "../pixels-metavers/apiHook";
import React from "react";

export const PixelsMetaverse = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const [userBaseInfo, setUserBaseInfo] = useState<Dictionary<any>>({})
  const [userAssetsInfo, setAssetsInfo] = useState<any[]>([])

  const getUserBaseInfo = useRequest(fetchUserBaseInfo)
  const getUserAssetsInfo = useRequest(fetchGetUserAssets)

  const convertedPostion = useConvertedPostion()

  useEffect(() => {
    if (isEmpty(accounts?.address)) return
    getUserBaseInfo({ address: accounts?.address, setUserBaseInfo })
    getUserAssetsInfo({ address: accounts?.address, setAssetsInfo })
  }, [accounts?.address, contract])

  const { noOutfitEdList, outfitEdList } = useMemo(() => {
    if (isEmpty(userAssetsInfo)) return {
      outfitEdList: [],
      noOutfitEdList: [],
    }
    return {
      outfitEdList: filter(userAssetsInfo, item => item?.isOutfit),
      noOutfitEdList: filter(userAssetsInfo, item => !item?.isOutfit)
    }
  }, [userAssetsInfo])

  const positions = useMemo(() => {
    let data: Dictionary<any> = {}
    map(outfitEdList, item => {
      const positionsData = convertedPostion({
        positions: item?.data
      })
      data = { ...data, ...positionsData }
    })

    const colors: Dictionary<number[]> = {}
    for (let i in data) {
      colors[data[i]] ? colors[data[i]].push(Number(i)) : colors[data[i]] = [Number(i)]
    }

    let str = ""
    let min = 1
    for (let i in colors) {
      const position = map(colors[i], ite => (ite - min).toString(36)).join("|")
      str += `${parseInt(i.slice(1), 16).toString(36)}-${position}-`
    }
    return `${str}${min}`
  }, [outfitEdList])

  return (
    !isEmpty(userBaseInfo) ? <PixelsMetaverseHandleImgProvider size={480} showGrid data={{
      positions: positions,
      size: 'large',
      bgColor: userBaseInfo?.bgColor,
      gridColor: userBaseInfo?.gridColor,
    }}>
      <div className="flex justify-between bg-transparent flex-1 mt-4">
        <PersonCenter outfitEdList={outfitEdList} noOutfitEdList={noOutfitEdList} />
        <Avatar />
        <Merchants />
      </div>
    </PixelsMetaverseHandleImgProvider> : <div></div>
  )
}