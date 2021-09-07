import { useCallback, useEffect, useState } from "react"
import { cloneDeep, Dictionary } from "lodash";
import { IConfigOptions, IImgSize, TData } from "./PixelsMetaversImg";
import { usePixelsMetaverseContract } from "./PixelsMetaversProvider";
import { useGetListFun } from "./apiHook";
import SLIC from "../canvas/js/SLIC.js"

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
    clear,
    setValue
  }
}

export const useGetPositionData = (address: string) => {
  const [value, setValue] = useState<TData>({
    bgColor: "",
    gridColor: "",
    positions: {},
    size: "large"
  })
  const { contract } = usePixelsMetaverseContract()
  const getList = useGetListFun()

  useEffect(() => {
    if (!address) return
    if (!contract) return
    getList(contract, setValue)
  }, [address, setValue, contract])

  return value
}