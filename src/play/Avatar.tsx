import { Dictionary } from "lodash";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { stringRadixDeal } from "../helpers/radix";
import { PixelsMetaverseImg } from "../pixels-metavers/PixelsMetaversImg";

export const Avatar = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const size = {
    width: 480,
    height: 480
  }

  const [positions, setPositions] = useState<Dictionary<string>>({})

  /* useEffect(() => {
    const filedom = filedomRef.current
    const canvas = canvasRef.current

    let context;
    if (canvas) {
      canvas.width = size.width
      canvas.height = size.height
      canvas.style.width = size.width + "px"
      canvas.style.height = size.height + "px"
      context = canvas.getContext("2d") as CanvasRenderingContext2D
    }
  }, [filedomRef, canvasRef]) */

  const clearCanvas = useCallback((canvas) => {
    if (!canvas) return
    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.beginPath()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.stroke()
  }, [])

  const displayGrad = useCallback((canvas, context, withGrid) => {
    if (withGrid) {
      context.strokeStyle = "rgba(255, 255, 255, 0.5)"
      context.lineWidth = 1
      for (let i = 0; i < canvas.width; i += 20) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)
        context.stroke()
      }
      for (let i = 0; i < canvas.height; i += 20) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(canvas.width, i)
        context.stroke()
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"
    const context = canvas.getContext("2d") as CanvasRenderingContext2D

    clearCanvas(canvas)

    for (let i in positions) {
      context.beginPath()
      const sort = Number(i || 0)
      const count = 24 //size.width / sizeGrid // 一行或一列有多少个
      const x = ((sort % count || count) - 1) * 20;
      const y = (Math.ceil(sort / count) - 1) * 20;
      if (!positions[i]) continue
      context.fillStyle = positions[i]
      context.fillRect(x, y, 20, 20);

      //context.font = "10px Arial"
      //context.strokeText(` ${value[i] || ""}`, x, y + sizeGrid / 2 + 3);
      context.stroke()
    }

    displayGrad(canvas, context, true)
  }, [canvasRef, positions])

  //const strOtherRadix = `7)&O@F*148NxD3MsMDaq4EPR#6SyckgEFAH4TKzNg11¥CorYY'hpRw?x?lkbGNvW*Dt/#rH$oThKZ$2o0g1nPy3,?f)%qXguR[8t9AAM?FuAw,%x|(w$U~s6zpX3XVM#xoP¥ce80q6XCF(R·>!Rg¥m)UGRIZ~.!,z4Bp=kl50ZGl~TxtwkWaXSmObb`; const min = 151
  const strOtherRadix = `7A>e[Ip+}¥]{,URy&zZ%sTf40(Y)]h;x¥0O"AP·8TD'v=$DM{x":xkxu=)aLRA61@<QeE*LG5zlbYg¥"hA`; const min = 151

  const get16Str = useMemo(() => {
    return stringRadixDeal(strOtherRadix, 92, 17)
  }, [strOtherRadix])

  const getPosttion = useMemo(() => {
    let positionObg: Dictionary<string> = {}
    let postionStr = ""
    const splitArr = get16Str.split("|")

    for (let i = 0; i < splitArr.length; i++) {
      if (splitArr[i] === "") {
        postionStr = "#000000"
        continue
      }

      if (splitArr[i].length === 6) {
        postionStr = `#${splitArr[i]}`
        continue
      }

      positionObg[Number(splitArr[i]) + min] = postionStr
    }
    setPositions(positionObg)
    
  }, [get16Str, min])

  console.log(get16Str, "get16Str")

  const width = 480
  const height = 480

  return (
    <div className="m-4 card main-box" style={{width, height, overflow: "hidden", minWidth: width}}>
      <PixelsMetaverseImg address={"0xaCaC0D517161891a0327649C2c4f571249B7720E"} width={width} height={height} showGrid/>
      {/* <canvas id="avatar" ref={canvasRef}>Sorry, your browser dose not support canvas.</canvas> */}
    </div>
  );
};