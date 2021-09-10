import { ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Tooltip, Select, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Dictionary, find, keys, map } from 'lodash';
import { usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from '../pixels-metavers/PixelsMetaversProvider';
import { useGetGoodsList, usePostGoods } from '../pixels-metavers/apiHook';
const { Option } = Select;

const Label = ({ children }: { children: ReactNode }) => {
  return <div className="pt-4">{children}<span className="text-red-500">&nbsp;*</span></div>
}

const mustNum = (e: ChangeEvent<HTMLInputElement>) => {
  const val = Number(e?.target?.value);
  if (Number(e.target.value) >= 0 && !isNaN(val)) {
    return e.target.value
  }
  if (isNaN(parseFloat(e.target.value))) {
    return ""
  }
  return `${parseFloat(e.target.value)}`
}

export const categoryData = [
  {
    label: "脸",
    value: "face"
  }, {
    label: "头发",
    value: "hair"
  }, {
    label: "眼睛",
    value: "eye"
  }, {
    label: "鼻子",
    value: "nose"
  }, {
    label: "嘴巴",
    value: "mouth"
  }, {
    label: "耳朵",
    value: "ear"
  }, {
    label: "脖子",
    value: "neck"
  }, {
    label: "饰品",
    value: "accessories"
  }, {
    label: "其他",
    value: "other"
  }
]

export interface IMerchandise {
  name: string;
  category: string,
  amount: string;
  data?: string;
  price: string;
  weight?: string
}

export const Application = () => {
  const [{
    name,
    category,
    amount,
    price,
    weight,
  }, setMerchandies] = useState<IMerchandise>({
    name: "卡姿兰大眼睛",
    category: "eye",
    amount: "10",
    price: "0.01",
    weight: "",
  })
  const { event } = usePixelsMetaverseContract()
  //const radixFun = new (require("radix.js"));

  useEffect(() => {
    console.log(event, "submit")
  }, [event])

  const handleOk = useCallback(() => {
    //const str17To92 = stringRadixDeal(positionData, 16, 36)
    //const str17 = stringRadixDeal(str17To92, 36, 16)
    const data1 = "nftData1"
    const data = {
      name,
      category,
      amount,
      price,
      weight,
      data: data1
    }
    console.log(data)
    let avatar = JSON.parse(localStorage.getItem("avatar") || "[]")
    //find(avatar, item => item.data === nftData) || avatar.push(data)
    //localStorage.setItem("avatar", JSON.stringify(avatar))
    //setIsModalVisible(false);
  }, []);

  const checkData = useCallback(() => {
    if (!name) {
      message.warn("请输入商品名称");
      return;
    }
    if (!category) {
      message.warn("请选择商品种类");
      return;
    }
    if (!amount) {
      message.warn("请输入商品数量");
      return;
    }
    if (!price) {
      message.warn("请输入商品价格");
      return;
    }
    return true;
  }, [name, category, amount, price]);

  return (
    <div className="p-4 rounded-md text-gray-300 m-auto mt-12"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        overflowY: "auto",
        width: 450,
        padding: 20
      }}>
      <div className="flex items-center text-2xl text-gray-300">申请成为入驻商家</div>
      <Label>店铺名称</Label>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width: "100%", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入店铺名称"
        value={name}
        maxLength={15}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, name: e.target.value })) }}
      />
      <Label>商品种类</Label>
      <Select
        className="search select"
        bordered={false}
        dropdownClassName="bg-gray-300"
        size="large"
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          height: 40,
          outline: "none", borderRadius: 4,
          fontSize: 14,
          color: "rgba(255, 255, 255, 0.1) !important",
          paddingLeft: 0
        }}
        defaultValue={category}
        placeholder="请选择商品种类"
        optionFilterProp="children"
        onChange={(e: string) => { setMerchandies((pre) => ({ ...pre, category: e })) }}
      >
        {
          map(categoryData, item => <Option key={item.value} value={item.value}>{item.label}</Option>)
        }
      </Select>
      <Label>商品数量</Label>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width:"100%", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品数量"
        value={amount}
        maxLength={10}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, amount: mustNum(e) })) }}
      />
      <Label>商品价格</Label>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width:"100%", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品价格"
        value={price}
        maxLength={18}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, price: mustNum(e) })) }}
      />
      <div className="flex items-center mt-4 shangping">
        <div>商品权重</div>
        <Tooltip placement="top" className="cursor-pointer" title={`商品权重指当前商品在商家自己的商店中的排名，权重越高排名越靠前。`} color="#29303d">
          <ExclamationCircleOutlined />
        </Tooltip>
      </div>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width:"100%", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品权重"
        value={weight}
        maxLength={18}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, weight: mustNum(e) })) }}
      />
      <div className="flex justify-center items-center h-10 mt-6 text-white cursor-pointer bg-red-500" style={{ width: "100%", borderRadius: 4 }}
        onClick={() => {
          const is = checkData()
          if (!is) return
        }}
      >提交</div>
    </div>
  );
};