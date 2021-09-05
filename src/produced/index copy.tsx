import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { cloneDeep, Dictionary, divide } from "lodash";
import { gradToSort, positionToGrad } from "../helpers/utilities"
import { Popover, Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined } from "@ant-design/icons";

export type IPosition = { x: number; y: number };

export type IPositionGroup = [IPosition, IPosition];

export const useDealClick = () => {
  const [value, setValue] = useState<Dictionary<number>>({})
  const add = useCallback(
    (num) => {
      setValue((pre) => {
        const value = cloneDeep(pre)
        const count = (value[num] || 0) + 1
        return ({ ...pre, [num]: count })
      })
    }, [])

  const remove = useCallback(
    (num) => {
      setValue((pre) => {
        const value = cloneDeep(pre)
        const count = (value[num] || 0) - 1
        value[num] = count
        if (count < 0) {
          delete value[num]
        }
        return value
      })
    }, [])

  return {
    value,
    add,
    remove
  }
}

const getColor = (num: number) => {
  const a = num * 1234 % 255
  const b = num * 1202 % 255
  const c = num * 1992 % 255
  return 'rgb(' + a + ',' + b + ',' + c + ')';
}

export const Produced = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const size = { width: 480, height: 480 }
  const [src, setSrc] = useState("https://lh3.googleusercontent.com/FRHkPkzzEp0aoWSz1sf70C_qFKAaILTs7ZQT_22iGbR2rV0-vx1TZHlEXEmjcwJ30tpoMN_4Y182RCraOnIlcNfhQtegqbl9emSpkw=w600")
  const [url, setUrl] = useState(src)
  const [{
    blockSize,
    weight,
    iters,
    stride,
    withGrid,
    withCenters,
    withContours,
  }, setConfig] = useState({
    blockSize: 20,
    weight: 30,
    iters: 20,
    stride: 20,
    withGrid: false,
    withCenters: false,
    withContours: false,
  })
  const [values, setValues] = useState<IPosition[][]>([]);
  const { add, value, remove } = useDealClick()
  const [img, setImg] = useState<HTMLImageElement | null>(null)

  /* useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return
    const click$ = fromEvent(cvs, "click")
    const observer = click$.pipe(
      rxMap((e: Event) => {
        const event = e as unknown as MouseEvent
        return positionToGrad({
          x: event.offsetX,
          y: event.offsetY,
        })
      }),
    );

    const mouseDown$ = fromEvent(cvs, "mousedown");
    const mouseMove$ = fromEvent(document, "mousemove");
    const mouseUp$ = fromEvent(document, "mouseup");

    const observer = mouseDown$.pipe(
      rxMap((e: Event) => {
        const event = e as unknown as MouseEvent
        return {
          x: event.offsetX,
          y: event.offsetY,
        };
      }),
    );
    console.log(observer.subscribe())

    const sub = observer.subscribe(({ x, y }) => {
      console.log({ x, y })
    });

    cvs.setAttribute("style", "cursor: cell");

    return () => {
      sub.unsubscribe();
      cvs.setAttribute("style", "cursor: initial");
    };
  }, [canvasRef]); */

  console.log(values)

  /* useEffect(() => {
    const canvas = ref?.current;
    if (!(canvas && ratio)) {
      return;
    }
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    forEach(values, (item) => {
      if (!item.length) return;
      const [point1, point2] = [item[0], item[2]];
      const { x, y } = point1;
      const { x: x1, y: y1 } = point2;
      drawRect(ctx, x, y, x1 - x, y1 - y, LINE_COLOR);
    });
    const validValues = filter(values, (item) => item.length);
    if (!validValues.length) {
      setCollisions(false);
      setErr(undefined);
      return;
    }
    try {
      const isCollase = detectIntersectionForRect(validValues as IPosition[][]);
      setCollisions(isCollase);
      setErr(undefined);
    } catch {
      setErr("存在非法电子围栏");
    }
  }, [ref, values, ratio]);

  const format = () => {
    return filter(
      map(values, (v) => {
        return map(v, ({ x, y }) => ({
          x: round(x * ratio),
          y: round(y * ratio),
        }));
      }),
      (v) => v.length > 0,
    );
  }; */

  const fileOnChange = useCallback(() => {
    const filedom = filedomRef.current
    if (filedom && filedom?.files) {
      const file = filedom?.files[0];
      if (!file.type.match("image.*")) {
        return
      }
      let reader = new FileReader()
      reader.onload = function () {
        let bytes = this.result
        let img = new Image()
        img.src = "" + bytes
        img.onload = function () {
          setImg(img)
        }
      }
      reader.readAsDataURL(file)
    }
  }, [filedomRef])

  const displayGrad = useCallback((canvas, context, withGrid) => {
    let imgData = context.createImageData(canvas.width, canvas.height)
    /* for (let i = 0; i < pixelImage.length; i++) {
      imgData.data[i] = pixelImage[i];
      context.putImageData(imgData, 0, 0)
    } */
    if (withGrid) {
      context.strokeStyle = "rgba(255, 255, 255, 0.5)"
      context.lineWidth = 1
      for (let i = 0; i < canvas.width; i += stride) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)
        context.stroke()
      }
      for (let i = 0; i < canvas.height; i += stride) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(canvas.width, i)
        context.stroke()
      }
    } else {
      context.beginPath()
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.stroke()
    }
  }, [stride])

  /*  useEffect(() => {
     const canvas = canvasRef.current
     if (!canvas) return
     const context = canvas.getContext("2d") as CanvasRenderingContext2D
     dealImg(withGrid)
   }, [img]) */

  const dealImg = useCallback((img) => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"
    canvas.setAttribute("style", "cursor: cell");

    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    displayGrad(canvas, context, withGrid)
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
  }, [canvasRef, blockSize, iters, stride, weight, withGrid])

  const onLoadImg = (src: string) => {
    let img = new Image()
    img.src = src
    img.crossOrigin = ""
    img.onload = function () {
      setImg(img)
    }
  }

  useEffect(() => {
    onLoadImg(src)
  }, [src])
  
  let timer: any;

  const getPosition = (event: MouseEvent) => {
    const offsetX = event.pageX - (canvasRef.current?.offsetLeft || 0)
    const offsetY = event.pageY - (canvasRef.current?.offsetTop || 0)
    return positionToGrad({
      x: offsetX,
      y: offsetY,
    }, 20)
  }

  console.log(value)

  useEffect(() => {
    const canvas = canvas2Ref.current
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"
    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    displayGrad(canvas, context, true)
    for (let i in value) {
      context.beginPath()
      const sort = Number(i || 0)
      const x = (sort % 48 - 1) * 10;
      const y = (Math.ceil(sort / 48) - 1) * 10;
      context.rect(x, y, 10, 10)
      context.fillStyle = value[i] ? getColor(value[i]) : "transparent"
      context.fill()

      context.font = "10px Arial"
      context.strokeText(`${value[i] || ""}`, x, y + 8);
      context.stroke()
    }
  }, [canvas2Ref, value])

  useEffect(() => {
    if (!img) return
    dealImg(img)
  }, [img, withGrid])

  return (
    <div className="flex">
      <div className="flex p-8 mr-8">
        <div>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden onChange={fileOnChange} ref={filedomRef} />
          <div className="my-4 flex items-center search-box justify-between" style={{
            width: size.width,
            borderRadius: 4,
            height: 40,
            color: "white"
          }}>
            <input
              className="py-2 pl-4 mr-2 bg-transparent search"
              style={{ width: size.width - 150 }}
              placeholder="请输入图片链接"
              value={url}
              onChange={(e) => { setUrl(e.target.value) }}
            />
            {url && <CloseCircleOutlined onClick={() => { setUrl("") }} />}
            <div className="flex items-center justify-center h-full bg-red-500 cursor-pointer"
              style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, width: 100 }}
              onClick={() => { setSrc(url); /* add("haahhatest") */ }}>{url ? "导入该图片" : <label htmlFor="avatar" className="cursor-pointer">上传文件</label>}</div>
          </div>
          <div className="relative">
            <div className="flex flex-col text-gray-300 absolute py-4" style={{ fontSize: 20, height: 480, width: 30, left: -30, top: 0, boxShadow: "0px 0px 10px rgba(225,225,225,0.3)" }}>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title="大格子" color="rgba(225, 225, 225, 0.3)">
                <PlusCircleOutlined />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title="小格子" color="rgba(225, 225, 225, 0.3)">
                <MinusCircleOutlined />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title="隐藏辅助线" color="rgba(225, 225, 225, 0.3)">
                <AppstoreOutlined onClick={() => {
                  setConfig((pre) => ({ ...pre, withGrid: !withGrid }))
                }} />
              </Tooltip>
            </div>
            <canvas id="canvas" width="200px" height="200px" ref={canvasRef}
              onClick={(e) => {
                const event = e as unknown as MouseEvent
                clearTimeout(timer);
                if (!canvasRef.current) return
                timer = setTimeout(() => {
                  const position = getPosition(event)
                  add(gradToSort(position, 20))
                }, 200);
              }}
              onDoubleClick={(e) => {
                const event = e as unknown as MouseEvent
                clearTimeout(timer);
                const position = getPosition(event)
                remove(gradToSort(position, 20))
              }}
            >Sorry, your browser dose not support canvas.</canvas>
          </div>
        </div>
      </div>
      <div className="p-8">
        <canvas
          id="canvas2"
          width="200px"
          height="200px"
          ref={canvas2Ref}
          style={{
            backgroundColor: "rgba(17, 24, 39, 1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >Sorry, your browser dose not support canvas.</canvas>
      </div>
    </div>
  )
}