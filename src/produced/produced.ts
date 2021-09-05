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
    iters: 10,
    stride: 10,
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

  // read file 
    /* filedom.addEventListener("change", function (e) {
        let f = this.files[0]
        filename = f.name
        filetype = f.type
        if (!f.type.match("image.*")) {
            return
        }
        let reader = new FileReader()
        reader.onload = function (event) {
            let bytes = this.result
            let img = new Image()
            img.src = "" + bytes
            img.onload = function () {
                dealImg(img)
            }
        }
        reader.readAsDataURL(f)
    }) */

  let img = new Image()
  img.src = "https://lh3.googleusercontent.com/FRHkPkzzEp0aoWSz1sf70C_qFKAaILTs7ZQT_22iGbR2rV0-vx1TZHlEXEmjcwJ30tpoMN_4Y182RCraOnIlcNfhQtegqbl9emSpkw=w600" //"https://lh3.googleusercontent.com/sBc8EfYO-_GAhD8sWQEsoXQGZIITJP9pZJtcDg9nnSPwKa72X5-tIs-6nS9ji8b3vVXfNHXV7PQXLM_k9VN2x3QcQzIuql7P6qxR5w=w600"
  img.crossOrigin = ""
  img.onload = function () {
    dealImg(img)
  }
}