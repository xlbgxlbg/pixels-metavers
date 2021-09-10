import { useEffect, useRef } from "react"
import { useClearCanvas, useDealImg, useDisplayGrad, useDrawImgColor } from "./canvasHook"
import { usePixelsMetaverseHandleImg } from "./PixelsMetaversProvider"
import { loadProduced } from "./slic"

export const CanvasSlicImg = ({ img, sizeGrid }: { img: HTMLImageElement, sizeGrid: number }) => {
  const { setConfig, config, canvasRef, dealClick: { value } } = usePixelsMetaverseHandleImg()
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const drawImg = useDealImg()
  const clearCanvas = useClearCanvas()
  const setGrad = useDisplayGrad()
  const size = {
    width: 480,
    height: 480
  }

  useEffect(() => {
    const canvas = canvas2Ref.current
    let context;
    if (canvas) {
      canvas.width = size.width
      canvas.height = size.height
      canvas.style.width = size.width + "px"
      canvas.style.height = size.height + "px"
      context = canvas.getContext("2d") as CanvasRenderingContext2D
    }
    if (canvas && context) {
      loadProduced({
        canvas,
        context,
        img,
        sizeGrid
      })
    }
  }, [img, canvas2Ref, sizeGrid])

  useEffect(() => {
    const canvas = canvasRef.current
    const canvas2 = canvas2Ref.current
    if (canvas && canvas2) {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D
      clearCanvas(canvas, context)
      drawImg(canvas, context, config.bgImgUp)
      setGrad(context, config)
    }
  }, [canvas2Ref, canvasRef, config, value, config.bgImgUp])

  useEffect(() => {
    const canvas = canvasRef.current
    const canvas2 = canvas2Ref.current
    if (canvas && canvas2) {
      const imgURL = canvas2.toDataURL("image/jpeg")
      if (!imgURL) return
      let img = new Image()
      img.src = imgURL
      img.onload = function () {
        setConfig((pre) => ({ ...pre, bgImgUp: img }))
      }
    }
  }, [config.bgImg])

  return (
    <div
      className="absolute"
      style={{
        left: (canvasRef?.current?.offsetLeft || 30),
        top: canvasRef?.current?.offsetTop
      }}
    >
      <canvas ref={canvas2Ref}>Sorry, your browser dose not support canvas.</canvas>
    </div>
  )
}
