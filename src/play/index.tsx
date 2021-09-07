import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";
import { PixelsMetaverseHandleImgProvider } from "../pixels-metavers/PixelsMetaversProvider";
import { useGetPositionData } from "../pixels-metavers/canvasHook";
import { isEmpty, last } from "lodash";
import { useMemo } from "react";

export const PixelsMetaverse = () => {
  const value = useGetPositionData("1232131")
  const postions = useMemo(() => {
    if (isEmpty(value)) return ""
    return "0-0-3plop-1b|1c|1d-397"
  }, [value])

  return (
    <PixelsMetaverseHandleImgProvider showGrid size={480} data={{
      positions: postions,
      size: 'large',
      bgColor: "rgba(225,225,225,0.2)",
      gridColor: "rgba(225,225,225,0.7)",
    }}>
      <div className="flex justify-between bg-transparent flex-1 mt-4">
        <PersonCenter />
        <Avatar />
        <Merchants />
      </div>
    </PixelsMetaverseHandleImgProvider>
  )
}