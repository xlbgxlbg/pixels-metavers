import { useEffect, useRef } from "react";

export const Avatar = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const size = {
    width: 480,
    height: 480
  }

  useEffect(() => {
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
  }, [filedomRef, canvasRef])

  return (
    <div className="m-4 card main-box">
      <input id="filebtn" type="file" hidden ref={filedomRef} />
      <canvas id="avatar" ref={canvasRef}>Sorry, your browser dose not support canvas.</canvas>
    </div>
  );
};