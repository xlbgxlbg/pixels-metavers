import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";
import { PixelsMetaverseHandleImgProvider } from "../pixels-metavers/PixelsMetaversProvider";
import { useGetPositionData } from "../pixels-metavers/canvasHook";
import { isEmpty } from "lodash";
import { useMemo } from "react";

export const PixelsMetaverse = () => {
  const value = useGetPositionData("1232131")
  const postions = useMemo(() => {
    if (isEmpty(value)) return ""
    return "6t3pd-ht-6uigw-pe|pj|x4|p4-78hkx-w5-7ikwf-s9|wb|qi-7jzgv-53-7mrf4-w3-7zdcf-1gd-7zdjj-1g9-98cjn-16-98tm8-v6-9bm5o-1es-9cci8-1ao-9d14f-1dt-9d14h-l4-9f5n3-yr|186-9f5n4-w1-9icfw-5e-9icn3-al-9jr7g-d3-9kg00-117-9mwhi-oi-9q29t-14a-9q2gx-yt|xi|16m|16k|0|1g|1m-9xohy-ms|l6|5l|ce|14i-118"
  }, [value])

  return (
    <PixelsMetaverseHandleImgProvider size={480} showGrid data={{
      positions: postions,
      size: 'large',
      bgColor: "transparent",
      gridColor: "rgba(225,225,225,0.5)",
    }}>
      <div className="flex justify-between bg-transparent flex-1 mt-4">
        <PersonCenter />
        <Avatar />
        <Merchants />
      </div>
    </PixelsMetaverseHandleImgProvider>
  )
}