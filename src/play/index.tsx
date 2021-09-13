import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";
import { PixelsMetaverseHandleImgProvider, usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
import { useConvertedPostion } from "../pixels-metavers/canvasHook";
import { Dictionary, filter, isEmpty, map } from "lodash";
import { useMemo } from "react";
import { useUserInfo } from "../components/UserProvider";
import { useLocation } from "react-router-dom";

export const PixelsMetaverse = () => {
  const { accounts } = usePixelsMetaverseContract()
  const { search } = useLocation()
  const address = search ? search.split("=")[1] : accounts?.address
  const { goodsList, userInfo, goodsId } = useUserInfo()
  const convertedPostion = useConvertedPostion()

  const { noOutfitEdList, outfitEdList } = useMemo(() => {
    if (isEmpty(goodsList)) return {
      outfitEdList: [],
      noOutfitEdList: [],
    }
    return {
      outfitEdList: filter(goodsList, item => !item?.isSale && item?.isOutfit && item?.owner === address),
      noOutfitEdList: filter(goodsList, item => !item?.isSale && !item?.isOutfit && item?.owner === address)
    }
  }, [goodsList, address, goodsId])

  const positions = useMemo(() => {
    if (isEmpty(outfitEdList)) return "empty"
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

  console.log(positions, "postion")

  return (
    !isEmpty(userInfo) ? <PixelsMetaverseHandleImgProvider size={480} showGrid={userInfo?.withGrid} data={{
      positions: positions,
      size: 'large',
      bgColor: userInfo?.bgColor,
      gridColor: userInfo?.gridColor,
    }}>
      <div className="flex justify-between bg-transparent flex-1 mt-4">
        <PersonCenter outfitEdList={outfitEdList} noOutfitEdList={noOutfitEdList} />
        <Avatar />
        <Merchants />
      </div>
    </PixelsMetaverseHandleImgProvider> : <div></div>
  )
}