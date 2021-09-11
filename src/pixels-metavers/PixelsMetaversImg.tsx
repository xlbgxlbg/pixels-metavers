import React, { DetailedHTMLProps, RefObject, useEffect, useMemo, useRef } from "react"
import { cloneDeep, Dictionary } from "lodash";
import { stringRadixDeal } from "./utilities/radix";
import { useClearCanvas, useConvertedPostion, useDealImg, useDisplayGrad, useDrawImgColor, useGetPositionData, useSetCanvasSize } from "./canvasHook";
import { usePixelsMetaverseHandleImg } from "./PixelsMetaversProvider";
import { get16Color } from "./utilities";
import { gradToSort, positionToGrad } from "./utilities/position";

export type IPosition = { x: number; y: number };

export type IPositionGroup = [IPosition, IPosition];

export type TPostions = Dictionary<string>

export interface IImgSize {
  width: number;
  height: number
}

export interface IConfigOptions {
  sizeGrid: number,
  withGrid: boolean,
  imgSize: IImgSize,
  bgImg: CanvasImageSource | any,
  bgColor: string,
  bgImgUp: CanvasImageSource | any, // 外面那一层的img
  isHandDraw?: boolean,
  gridColor?: string,
  drawColor?: string
}

export type TCanvasHTMLAttributes = DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

export type TData = {
  positions: any;
  size: string;
  bgColor: string;
  gridColor: string
}

export type IPixelsMetaverseImgByAddress = {
  address: string;
  size: number;
  showGrid?: boolean
} & TCanvasHTMLAttributes

export type IPixelsMetaverseImgByPositionData = {
  data: TData;
  size: number; //高宽长度一致
  showGrid?: boolean;
  handDraw?: boolean
} & TCanvasHTMLAttributes

// 传入地址后获取图片数据再渲染
export const PixelsMetaverseImgByAddress = ({ address, size, showGrid, ...props }: IPixelsMetaverseImgByAddress) => {
  const value = useGetPositionData(address)

  return (
    <PixelsMetaverseImgByPositionData
      showGrid={showGrid}
      size={size}
      data={value}
      {...props}
    />
  )
}

// 仅仅只是拿到位置数据后绘制canvas而不对canvas进行操作， 可支持一次获取数据批量绘制头像，获取逻辑在外层进行。此处只进行绘制
export const PixelsMetaverseImgByPositionData = ({ data, size, showGrid, ...props }: IPixelsMetaverseImgByPositionData) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const config = useMemo(() => {
    return {
      imgSize: { width: size, height: size },
      sizeGrid: data.size === "large" ? size / 48 : size / 24,
      withGrid: !!showGrid,
      bgImg: "",
      bgColor: data.gridColor || "#638496",
      gridColor: data.gridColor || "white"
    } as IConfigOptions
  }, [data])
  const getPositionData = useConvertedPostion()

  const postionData = useMemo(() => {

    if (!data.positions) return {}
    if (!data.positions.includes("-")) return {}

    return getPositionData(data)
  }, [data.positions])

  return (
    <PixelsMetaverseCanvas
      config={config}
      data={postionData}
      canvasRef={canvasRef}
      showGridColor
      style={{
        backgroundColor: config?.bgColor
      }}
      {...props}
    />
  )
}

export const PixelsMetaverseImgWithHandle = ({ address, size, showGrid, ...props }: IPixelsMetaverseImgByAddress) => {
  //const value = useGetPositionData(address)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <PixelsMetaverseHandleImg
      canvasRef={canvasRef}
      {...props}
    />
  )
}

export const PixelsMetaverseHandleImg = ({ canvasRef, showBgImg, showGridColor, ...props }: { canvasRef: React.RefObject<HTMLCanvasElement>, showBgImg?: boolean; showGridColor?: boolean; } & TCanvasHTMLAttributes) => {
  const { config, getGradPosition, setPositionsArr, positionsArr, dealClick: { add, value, remove } } = usePixelsMetaverseHandleImg()
  let timer: any;

  const clickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement> | null) => {
    clearTimeout(timer);
    if (!canvasRef?.current) return
    timer = setTimeout(() => {
      const position = positionToGrad(getGradPosition(event, canvasRef.current), config.sizeGrid)
      const context = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
      const { x, y } = getGradPosition(event, canvasRef.current)
      let data = context.getImageData(x, y, 1, 1).data
      const rgba = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
      const sort = gradToSort(position, config.imgSize.width, config.sizeGrid)
      const ponitColor = get16Color(config.drawColor || rgba)
      add(sort, ponitColor)
      console.log(rgba, "rgba")
      if (!positionsArr.includes(sort)) {
        setPositionsArr(((pre) => ([...pre, sort])))
      }
    }, 200);
  }

  const doubleClickCanvas = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement> | null) => {
    clearTimeout(timer);
    if (!canvasRef?.current) return
    const position = positionToGrad(getGradPosition(event, canvasRef.current), config.sizeGrid)
    const sort = gradToSort(position, config.imgSize.width, config.sizeGrid)
    remove(sort)
    setPositionsArr((pre) => {
      const positionss = cloneDeep(pre)
      const positionssIndex = positionss.indexOf(sort)
      positionss.splice(positionssIndex, 1)
      return positionss
    })
  }

  return (
    <PixelsMetaverseCanvas
      config={config}
      data={value}
      canvasRef={canvasRef}
      showBgImg={showBgImg}
      showGridColor={showGridColor}
      style={{
        backgroundColor: config?.bgColor
      }}
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
    />)
}

export const PixelsMetaverseCanvas = ({
  data,
  config,
  canvasRef,
  showBgImg,
  showGridColor,
  ...props
}: {
  data: Dictionary<string>; // 某个位置的颜色数据
  config: IConfigOptions;
  showBgImg?: boolean;
  showGridColor?: boolean;
  canvasRef: RefObject<HTMLCanvasElement> | null;
} & TCanvasHTMLAttributes) => {
  const setSize = useSetCanvasSize()
  const setGrad = useDisplayGrad()
  const dealBgImg = useDealImg()
  const drawPixelsImg = useDrawImgColor()
  const clearCanvas = useClearCanvas()

  useEffect(() => {
    const canvas = canvasRef?.current
    if (!canvas || config.imgSize.width <= 0 || (config?.withGrid && config.sizeGrid <= 0)) return
    console.log("绘制数据", data)
    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    setSize(canvas, config.imgSize)
    clearCanvas(canvas, context)
    if (config.imgSize.width > 1 && config.imgSize.height > 1 && config.sizeGrid >= 1) {
      //showBgImg && dealBgImg(canvas, context, config.bgImgUp)
      showGridColor && drawPixelsImg(config.imgSize, context, data, config.sizeGrid)
    }
    if (config.sizeGrid >= 1) {
      setGrad(context, config)
    }
  }, [canvasRef, data, config])


  return (
    <canvas
      ref={canvasRef}
      width={0}
      height={0}
      {...props}
    >Sorry, your browser dose not support canvas.</canvas>
  )
}