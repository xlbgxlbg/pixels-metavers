import SLIC from "../canvas/js/SLIC.js"
import mali from "../image/he.jpeg"

export const loadProduced = ({
  filedom,
  canvas,
  context
}: {
  filedom: HTMLInputElement,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
}) => {
  let config = {
    blockSize: 20,
    weight: 30,
    iters: 4,
    stride: 4,
    withGrid: true,
    withCenters: false,
    withContours: false,
  }
  let pixelImage: Uint8ClampedArray
  let slic: SLIC

  //paiting pixel in canvas
  function displayImg() {
    let imgData = context.createImageData(canvas.width, canvas.height)
    for (let i = 0; i < pixelImage.length; i++)
      imgData.data[i] = pixelImage[i]
    context.putImageData(imgData, 0, 0)

    if (config.withGrid) {
      context.strokeStyle = "white"
      context.lineWidth = 1
      for (let i = 0; i < canvas.width; i += config.stride) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)
        context.stroke()
      }
      for (let i = 0; i < canvas.height; i += config.stride) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(canvas.width, i)
        context.stroke()
      }
    }
  }

  function dealImg(img: HTMLImageElement) {
    context.drawImage(img, 0, 0, canvas.width, canvas.height)

    let canvasData = context.getImageData(0, 0, canvas.width, canvas.height)
    let binaryData = canvasData.data
    let nr_superpixels = canvas.width
    config.blockSize = Math.round(Math.sqrt((canvas.width * canvas.height) / nr_superpixels))
    slic = new SLIC(binaryData, canvas.width, canvas.height)
    pixelImage = slic.pixelDeal(config.blockSize, config.iters, config.stride, config.weight)
    displayImg()
  }

  let img = new Image()
  img.src = mali
  img.crossOrigin = ""
  img.onload = function () {
    dealImg(img)
  }
}