export type IPosition = { x: number; y: number };

export const positionToGrad = (point: IPosition, sizeGrid: number) => {
  return {
    x: Math.ceil((point.x / sizeGrid)),
    y: Math.ceil((point.y / sizeGrid)),
  }
}

export const gradToSort = (grad: IPosition, width: number, sizeGrid: number) => {
  return grad.x + (grad.y - 1) * (width / sizeGrid)
}