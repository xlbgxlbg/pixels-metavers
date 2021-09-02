import { useEffect, useRef } from "react"
import { loadProduced } from "./produced"

export const Produced = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const filedom = filedomRef.current
    const canvas = canvasRef.current

    let context;
    if (canvas) {
      context = canvas.getContext("2d") as CanvasRenderingContext2D
    }
    if (filedom && canvas && context) {
      loadProduced({
        filedom,
        canvas,
        context,
      })
    }
  }, [filedomRef, canvasRef])

  return (
    <div>
      <input id="filebtn" type="file" hidden ref={filedomRef} />
      <canvas id="canvas" width="200px" height="200px" ref={canvasRef}>Sorry, your browser dose not support canvas.</canvas>
    </div>
  )
}