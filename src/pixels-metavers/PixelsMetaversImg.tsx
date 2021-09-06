import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"
import React, { createContext, DetailedHTMLProps, Dispatch, ReactNode, RefObject, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { cloneDeep, Dictionary, divide, isEmpty, keys, last, map, orderBy } from "lodash";
import { gradToSort, positionToGrad } from "../helpers/utilities"
import { Popover, Tooltip } from "antd";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import { AppstoreOutlined, BgColorsOutlined, ClearOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useGetListFun, usePixelsMetaverseContract } from "./PixelsMetaversProvider";
import { stringRadixDeal } from "./utilities.ts/radix";

export type IPosition = { x: number; y: number };

export type IPositionGroup = [IPosition, IPosition];

export const PixelsMetaverseContext = createContext(
  {} as {
    accounts: any;
    contract: any;
    setAccounts: Dispatch<React.SetStateAction<any>>;
    setContract: Dispatch<React.SetStateAction<any>>;
  },
);

export const usePixelsMetaverse = () => useContext(PixelsMetaverseContext);

export const PixelsMetaverseProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  return (
    <PixelsMetaverseContext.Provider value={{ accounts, contract, setAccounts, setContract }}>
      {children}
    </PixelsMetaverseContext.Provider>
  )
}

export const get16Color = (color: string) => {
  // RGB颜色值的正则
  const reg = /^(rgb|RGB)/;
  if (reg.test(color)) {
    let strHex = "#";
    // 把RGB的3个数值变成数组
    const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    // 转成16进制
    for (let i = 0; i < colorArr.length; i++) {
      let hex = Number(colorArr[i]).toString(16);
      if (hex.length < 2) {
        hex = `0${hex}`
      }
      strHex += hex;
    }
    return strHex;
  } else {
    return String(color);
  }
}

export const Produced = () => {
  const filedomRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const size = { width: 480, height: 480 }
  const [src, setSrc] = useState(localStorage.getItem("imgUrl") || "")
  const [url, setUrl] = useState(src)
  const [{
    sizeGrid,
    withGrid
  }, setConfig] = useState({
    sizeGrid: 20,
    withGrid: true,
  })
  const [color, setColor] = useState<string>("")
  const [bgColor, setBgColor] = useState<string>("")

  const { add, value, remove, clear } = useDealClick()
  const [img, setImg] = useState<HTMLImageElement | null>(null)
  const [positions, setPositions] = useState<number[]>([])

  //上传图片
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

  //绘制辅助线
  const displayGrad = useCallback((canvas, context, withGrid) => {
    if (withGrid) {
      context.strokeStyle = "rgba(255, 255, 255, 0.5)"
      context.lineWidth = 1
      for (let i = 0; i < canvas.width; i += sizeGrid) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)
        context.stroke()
      }
      for (let i = 0; i < canvas.height; i += sizeGrid) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(canvas.width, i)
        context.stroke()
      }
    }
  }, [sizeGrid])

  //处理图片
  const dealImg = useCallback((img) => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"

    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    clearCanvas(canvas)
    if (img) {
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    displayGrad(canvas, context, withGrid)
  }, [canvasRef, sizeGrid, withGrid])

  const onLoadImg = (src: string) => {
    let img = new Image()
    img.src = src
    img.crossOrigin = ""
    img.onload = function () {
      setImg(img)
    }
  }

  useEffect(() => {
    localStorage.setItem("imgUrl", url)
    onLoadImg(src)
  }, [src])

  let timer: any;

  const getGradPosition = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      return {
        x: 0,
        y: 0
      }
    }
    const offsetX = event.pageX - (canvas?.offsetLeft || 0)
    const offsetY = event.pageY - (canvas?.offsetTop || 0)
    return {
      x: offsetX,
      y: offsetY,
    }
  }

  const clearCanvas = useCallback((canvas) => {
    if (!canvas) return
    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.beginPath()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.stroke()
  }, [])

  useEffect(() => {
    const canvas = canvas2Ref.current
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"
    const context = canvas.getContext("2d") as CanvasRenderingContext2D

    clearCanvas(canvas)

    for (let i in value) {
      context.beginPath()
      const sort = Number(i || 0)
      const count = size.width / sizeGrid // 一行或一列有多少个
      const x = ((sort % count || count) - 1) * sizeGrid;
      const y = (Math.ceil(sort / count) - 1) * sizeGrid;
      if (!value[i]) continue
      context.fillStyle = value[i]
      context.fillRect(x, y, sizeGrid, sizeGrid);

      //context.font = "10px Arial"
      //context.strokeText(` ${value[i] || ""}`, x, y + sizeGrid / 2 + 3);
      context.stroke()
    }

    displayGrad(canvas, context, withGrid)
  }, [canvas2Ref, value, sizeGrid, withGrid])

  useEffect(() => {
    dealImg(img)
  }, [img, withGrid, sizeGrid])

  const clickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement>) => {
    clearTimeout(timer);
    if (!canvasRef.current) return
    timer = setTimeout(() => {
      const position = positionToGrad(getGradPosition(event, canvasRef.current), sizeGrid)
      const context = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
      const { x, y } = getGradPosition(event, canvasRef.current)
      let data = context.getImageData(x, y, 1, 1).data
      const rgba = 'rgb(' + data[0] + ',' + data[1] +
        ',' + data[2] + ')';
      const sort = gradToSort(position, sizeGrid)
      const ponitColor = get16Color(color || rgba)
      add(sort, ponitColor)
      if (!positions.includes(sort)) {
        setPositions(((pre) => ([...pre, sort])))
      }
    }, 200);
  }

  const doubleClickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement>) => {
    clearTimeout(timer);
    const position = positionToGrad(getGradPosition(event, canvasRef.current), sizeGrid)
    const sort = gradToSort(position, sizeGrid)
    remove(sort)
    setPositions((pre) => {
      const positionss = cloneDeep(pre)
      const positionssIndex = positionss.indexOf(sort)
      positionss.splice(positionssIndex, 1)
      return positionss
    })
  }

  return (
    <div className="flex w-full">
      <div className="flex w-full p-8 justify-between">
        <div>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden onChange={fileOnChange} ref={filedomRef} />
          <div className="my-4 flex items-center justify-between" style={{
            width: size.width,
            borderRadius: 4,
            height: 40,
            color: "white",
          }}>
            <div className="flex items-center justify-between"
              style={{
                width: size.width - 100,
                background: "rgba(255, 255, 255, 0.1)",
                height: 40, borderTopLeftRadius: 4, borderBottomLeftRadius: 4
              }}>
              <input
                className="py-2 pl-4 mr-2 bg-transparent search"
                style={{ width: size.width - 240, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
                placeholder="请输入图片链接"
                value={url}
                onChange={(e) => { setUrl(e.target.value) }}
              />
              {url && <CloseCircleOutlined onClick={() => { setUrl("") }} />}
              <div className="flex items-center justify-center h-full bg-red-500 cursor-pointer"
                style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, width: 100 }}
                onClick={() => {
                  setSrc(url);
                  if (!url) {
                    setImg(null)
                  }
                  //addd("egIYEYIYMYQYUYYYcaUaYacb2b6bAbEd2d6dAdEdIdMdQdUdYfIfMfQfUfYfcX0A41eGAX5w4OeI6X8g4ZeIQX9w51eKQXKQ5beNMXYQ6PeXEY8w8teaUYOA9aeccYSQA4efMZ1wC9encZCgCpepcZGAD3erUZPwE1ev6a1QGGf16a4gGLf2caEQHGf6AaTwI1f8Mb0QK5fGQb2AKbfIcbCV|P9Z28PO7YGA91eaMYHgTyHoPQ9mfcuiHOf5caOAI2f8EaXAK7")
                }}>导入图片</div>
            </div>
            <div className="flex items-center justify-center h-full bg-red-500 cursor-pointer ml-2"
              style={{ borderRadius: 4, width: 100 }}
              onClick={() => { setSrc(url); /* add("haahhatest") */ }}><label htmlFor="avatar" className="cursor-pointer">上传文件</label></div>
          </div>
          <div>
            <div className="flex flex-col items-center text-gray-300 absolute py-4" style={{ fontSize: 20, height: 480, width: 30, left: (canvasRef?.current?.offsetLeft || 30) - 30, top: canvasRef?.current?.offsetTop, boxShadow: "0px 0px 10px rgba(225,225,225,0.3)" }}>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title="大格子" color="#29303d">
                <PlusCircleOutlined style={{ color: sizeGrid !== 20 && withGrid && isEmpty(value) ? 'white' : "gray", cursor: sizeGrid !== 20 && withGrid && isEmpty(value) ? "pointer" : "no-drop" }} onClick={() => {
                  isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 20 }))
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title="小格子" color="#29303d">
                <MinusCircleOutlined style={{ color: sizeGrid !== 10 && withGrid && isEmpty(value) ? 'white' : "gray", cursor: sizeGrid !== 10 && withGrid && isEmpty(value) ? "pointer" : "no-drop" }} onClick={() => {
                  isEmpty(value) && setConfig((pre) => ({ ...pre, sizeGrid: 10 }))
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={`${withGrid ? "隐藏" : "显示"}辅助线`} color="#29303d" >
                <AppstoreOutlined style={{ color: withGrid ? 'white' : "gray" }} onClick={() => {
                  setConfig((pre) => ({ ...pre, withGrid: !withGrid }))
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={`清除画布`} color="#29303d">
                <ClearOutlined style={{ color: !isEmpty(value) ? 'white' : "gray" }} onClick={() => {
                  clear()
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={`选择绘制颜色`} color="#29303d">
                <input type="color" name="颜色" id="" style={{ width: 20 }} onChange={(e) => {
                  setColor(e.target.value)
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={`丢弃选取的颜色`} color="#29303d">
                <DeleteOutlined style={{ color: !isEmpty(color) ? 'white' : "gray" }} onClick={() => { setColor("") }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={`调整背景色`} color="#29303d">
                <input type="color" name="颜色" id="" style={{ width: 20 }} onChange={(e) => {
                  setBgColor(e.target.value)
                }} />
              </Tooltip>
              <Tooltip placement="right" className="mb-4 cursor-pointer" title={() => {
                return (<div style={{ fontSize: 12 }}>
                  <div>1.格子大小只能在清除绘制画布数据后调整</div>
                  <div>2.清除画布数据会导致之前所有绘制丢失</div>
                  <div>3.选择了绘制颜色后，将不会从当前选中地方取色</div>
                  <div>4.丢弃当前选中色后，绘制的颜色将是点击处颜色</div>
                  <div>5.背景色仅仅为了方便查看，不会提交至区块链</div>
                  <div>6.双击即可删除当前位置数据</div>
                </div>)
              }} color="#29303d">
                <ExclamationCircleOutlined />
              </Tooltip>
            </div>
            <div className="flex">
              {img && <canvas id="canvas"
                width={0}
                height={0}
                style={{
                  backgroundColor: "rgba(17, 24, 39, 1)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: "cell",
                  boxShadow: "0px 0px 10px rgba(225,225,225,0.3)"
                }} ref={canvasRef}
                onClick={(e) => {
                  const event = e as unknown as MouseEvent
                  clickCanvas(event, canvasRef)
                }}
                onDoubleClick={(e) => {
                  const event = e as unknown as MouseEvent
                  doubleClickCanvas(event, canvasRef)
                }}
              >Sorry, your browser dose not support canvas.</canvas>}
              <canvas
                id="canvas2"
                ref={canvas2Ref}
                width={0}
                height={0}
                style={{
                  backgroundColor: bgColor || "rgba(17, 24, 39, 1)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: "cell",
                  boxShadow: "0px 0px 10px rgba(225,225,225,0.3)"
                }}
                onClick={(e) => {
                  const event = e as unknown as MouseEvent
                  clickCanvas(event, canvas2Ref)
                }}
                onDoubleClick={(e) => {
                  const event = e as unknown as MouseEvent
                  doubleClickCanvas(event, canvas2Ref)
                }}
              >Sorry, your browser dose not support canvas.</canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export interface IImgSize {
  width: number;
  height: number
}

export const useDisplayGrad = () => {
  return useCallback((context: CanvasRenderingContext2D, config: IConfigOptions) => {
    if (config.withGrid) {
      context.strokeStyle = config?.gridColor || "white";
      for (let i = 0; i < config.imgSize.width; i += config.sizeGrid) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, config.imgSize.height)
        context.stroke()
      }
      for (let i = 0; i < config.imgSize.height; i += config.sizeGrid) {
        if (i === 0) continue
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(config.imgSize.width, i)
        context.stroke()
      }
    }
  }, [])
}

export const useSetCanvasSize = () => {
  return useCallback((canvas: HTMLCanvasElement, size: IImgSize) => {
    if (!canvas) return
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.width = size.width + "px"
    canvas.style.height = size.height + "px"
  }, [])
}

export const useClearCanvas = () => {
  return useCallback((canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    if (!canvas) return
    context.beginPath()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.stroke()
  }, [])
}

export const useDrawImgColor = () => {
  return useCallback((imgSize: IImgSize, context: CanvasRenderingContext2D, data: Dictionary<string>, sizeGrid: number) => {
    if (!context) return
    for (let i in data) {
      if (!data[i]) continue
      context.beginPath()
      const sort = Number(i || 0)
      const count = imgSize.width / sizeGrid // 一行或一列有多少个
      const x = ((sort % count || count) - 1) * sizeGrid;
      const y = (Math.ceil(sort / count) - 1) * sizeGrid;
      context.fillStyle = data[i]
      context.fillRect(x, y, sizeGrid, sizeGrid);
      context.stroke()
    }
  }, [])
}

export const useDealImg = () => {
  //处理图片
  return useCallback((canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, img: CanvasImageSource) => {
    if (img) {
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }, [])
}

export const useGetClickGradPosition = () => {
  return useCallback((event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      return {
        x: 0,
        y: 0
      }
    }
    const offsetX = event.pageX - (canvas?.offsetLeft || 0)
    const offsetY = event.pageY - (canvas?.offsetTop || 0)
    return {
      x: offsetX,
      y: offsetY,
    }
  }, [])
}

export const useDealClick = () => {
  const [value, setValue] = useState<Dictionary<string>>({})
  const add = useCallback(
    (num, color) => {
      setValue((pre) => {
        const value = cloneDeep(pre)
        return ({ ...pre, [num]: color })
      })
    }, [])

  const remove = useCallback(
    (num) => {
      setValue((pre) => {
        const value = cloneDeep(pre)
        delete value[num]
        return value
      })
    }, [])

  const clear = useCallback(
    () => {
      setValue({})
    }, [])

  return {
    value,
    add,
    remove,
    clear
  }
}

export interface IConfigOptions {
  sizeGrid: number,
  withGrid: boolean,
  imgSize: IImgSize,
  bgImg: CanvasImageSource | any,
  bgColor: string,
  isHandDraw?: boolean,
  gridColor?: string
}

export type TCanvasHTMLAttributes = DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

export type IPixelsMetaverseImg = {
  address: string;
  width: number;
  height: number;
  showGrid?: boolean
} & TCanvasHTMLAttributes

// 其他网站开发者直接使用该组件就可以绘制出当前地址的头像图片
export const PixelsMetaverseImg = ({ address, width, height, showGrid, ...props }: IPixelsMetaverseImg) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [value, setValue] = useState<any>({
    bgColor: "",
    gridColor: ""
  })
  const { contract } = usePixelsMetaverseContract()
  const [positions, setPositions] = useState<string>(`7A>e[Ip+}¥]{,URy&zZ%sTf40(Y)]h;x¥0O"AP·8TD'v=$DM{x":xkxu=)aLRA61@<QeE*LG5zlbYg¥"hA-151`)
  const getList = useGetListFun()
  const [config, setConfig] = useState<IConfigOptions>({
    imgSize: { width, height },
    sizeGrid: 0,
    withGrid: !!showGrid,
    bgImg: "",
    bgColor: "",
    gridColor: ""
  })

  useEffect(() => {
    if (!address) return
    if (!contract) return
    getList(contract, setValue)
  }, [address, setValue, contract])

  useEffect(() => {
    //if(value?.positions){
    if(isEmpty(value)) return
    console.log(last(value as any[])?.content)
    const positions = last(value as any[])?.content
    setPositions(`5?&&dzvn76x)th9g^W$;@uTtZk>NFIs(c$QFo9;-274`)
    //}
  }, [value])

  useEffect(() => {
    if (!positions) return

    setConfig((pre) => ({
      ...pre,
      sizeGrid: value.size === "large" ? width / 48 : width / 24,
      bgColor: value.bgColor || "#638496",
      gridColor: value.gridColor || "white"
    }))
  }, [positions])

  const postionData = useMemo(() => {

    if (!positions) return {}
    if (!positions.includes("-")) return {}

    const position = positions?.split("-")
    const str17 = stringRadixDeal(position[0], 90, 17)
    // ID000000|24|29|99|100|170|171|172|86581e|0|1|5|6|a77c47|25|30|
    console.log(str17, "str17")

    let positionObg: Dictionary<string> = {}
    let postionStr = ""

    const splitArr = str17.split("|")
    console.log(splitArr)

    for (let i = 0; i < splitArr.length; i++) {
      if (splitArr[i] === "") {
        postionStr = "#000000"
        continue
      }

      if (splitArr[i].length === 6) {
        postionStr = `#${splitArr[i]}`
        continue
      }

      positionObg[Number(splitArr[i]) + Number(position[1])] = postionStr
    }

    return positionObg
  }, [positions])

  return (
    <PixelsMetaverseCanvas
      config={config}
      data={postionData}
      canvasRef={canvasRef}
      style={{
        backgroundColor: config?.bgColor
      }}
      {...props}
    />
  )
}

export const PixelsMetaverseHandleImg = ({
  data,
  width,
  heigth,
  ...props
}: {
  data: Dictionary<any>,
  width: number,
  heigth: number
} & TCanvasHTMLAttributes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [config, setConfig] = useState<IConfigOptions>({
    imgSize: { width: width || 480, height: heigth || 480 },
    sizeGrid: 20,
    withGrid: true,
    bgImg: "",
    bgColor: ""
  })
  const [currentDrawColor, setCurrentDrawColor] = useState<string>("")

  return (
    <PixelsMetaverseCanvas
      config={config}
      data={data}
      currentDrawColor={currentDrawColor}
      canvasRef={canvasRef}
      style={{
        backgroundColor: config?.bgColor
      }}
      {...props}
    />)
}

export const PixelsMetaverseCanvas = ({
  data,
  config,
  canvasRef,
  currentDrawColor,
  ...props
}: {
  data: Dictionary<string>;
  currentDrawColor?: string,
  config: IConfigOptions;
  canvasRef: RefObject<HTMLCanvasElement> | null;
} & TCanvasHTMLAttributes) => {

  console.log(data, config, "confgi")
  const setSize = useSetCanvasSize()
  const setGrad = useDisplayGrad()
  const dealBgImg = useDealImg()
  const drawPixelsImg = useDrawImgColor()
  const clearCanvas = useClearCanvas()
  const getGradPosition = useGetClickGradPosition()
  const [positions, setPositions] = useState<number[]>([])
  const { add, value, remove, clear } = useDealClick()
  let timer: any;

  useEffect(() => {
    const canvas = canvasRef?.current
    if (!canvas) return
    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    setSize(canvas, config.imgSize)
    clearCanvas(canvas, context)
    if (config.imgSize.width > 1 && config.imgSize.height > 1 && config.sizeGrid >= 1) {
      dealBgImg(canvas, context, config.bgImg)
      drawPixelsImg(config.imgSize, context, data, config.sizeGrid)
    }
    if (config.sizeGrid >= 1) {
      setGrad(context, config)
    }
  }, [canvasRef, data, config])

  const clickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement> | null) => {
    clearTimeout(timer);
    if (!canvasRef?.current) return
    timer = setTimeout(() => {
      const position = positionToGrad(getGradPosition(event, canvasRef.current), config.sizeGrid)
      const context = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
      const { x, y } = getGradPosition(event, canvasRef.current)
      let data = context.getImageData(x, y, 1, 1).data
      const rgba = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
      const sort = gradToSort(position, config.sizeGrid)
      const ponitColor = get16Color(currentDrawColor || rgba)
      add(sort, ponitColor)
      if (!positions.includes(sort)) {
        setPositions(((pre) => ([...pre, sort])))
      }
    }, 200);
  }

  const doubleClickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement> | null) => {
    clearTimeout(timer);
    if (!canvasRef?.current) return
    const position = positionToGrad(getGradPosition(event, canvasRef.current), config.sizeGrid)
    const sort = gradToSort(position, config.sizeGrid)
    remove(sort)
    setPositions((pre) => {
      const positionss = cloneDeep(pre)
      const positionssIndex = positionss.indexOf(sort)
      positionss.splice(positionssIndex, 1)
      return positionss
    })
  }

  return (
    <ImgCanvas
      canvasRef={canvasRef}
      onClick={(e) => {
        if (!config.isHandDraw) return
        const event = e as unknown as MouseEvent
        clickCanvas(event, canvasRef)
      }}
      onDoubleClick={(e) => {
        if (!config.isHandDraw) return
        const event = e as unknown as MouseEvent
        doubleClickCanvas(event, canvasRef)
      }}
      {...props}
    />
  )
}

export const ImgCanvas = ({
  canvasRef,
  ...props
}: {
  canvasRef: RefObject<HTMLCanvasElement> | null
} & TCanvasHTMLAttributes) => {
  return (
    <canvas
      ref={canvasRef}
      width={0}
      height={0}
      {...props}
    >Sorry, your browser dose not support canvas.</canvas>
  )
}