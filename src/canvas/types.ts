export interface BlockiesOptions {
  seed: string;
  size: number;
  scale: number;
  color: string;
  bgcolor: string;
  spotcolor: string;
}

export interface IFaceVariety {

}

export interface ICategory {
  color: string,
  theme: string,
  variety: string, //什么种类的器官 通常是ID，通过ID可以拿到对应的点数据
  ornaments?: "" //饰品，也就是配饰 眼镜 帽子 烟斗 耳环 项链等等
}

export enum EHeader {
  face = "脸",
  hair = "头发",
  eye = "眼睛",
  nose = "鼻子",
  mouth = "嘴巴",
  ear = "耳朵",
  neck = "脖子",
}

export type THeadOptions = {
  [k in keyof typeof EHeader]: ICategory
}

export type TPixelsMetaverse = {
  head: THeadOptions,
  body?: any
} & { gender?: "男" | "女" }