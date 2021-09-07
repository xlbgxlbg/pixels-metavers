import { PixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversImg";
import { usePixelsMetaverseHandleImg } from "../pixels-metavers/PixelsMetaversProvider";

export const Avatar = () => {
  const { config, canvas2Ref } = usePixelsMetaverseHandleImg()
  
  return (
    <div className="m-4 card main-box" style={{ width: config.imgSize.width, height: config.imgSize.height, overflow: "hidden", minWidth: config.imgSize.width }}>
      <PixelsMetaverseHandleImg canvasRef={canvas2Ref} showGridColor/>
    </div>
  );
};