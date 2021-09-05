import React, { ChangeEvent, ReactNode, useCallback, useMemo, useState } from 'react';
import { Form, Input, Button, Radio, Tooltip, Select, message } from 'antd';
import { ExclamationCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { RequiredMark } from 'antd/lib/form/Form';
import { Dictionary, map, orderBy } from 'lodash';
import { EHeader } from '../canvas';
import { string16to64, string64toBigInt10, stringBigInt10to16 } from '../helpers/utilities';
import { useAdd } from '../api/hook';
const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}


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
  price: string;
  weight?: string
}

interface ISubmit {
  value: Dictionary<string>
  positions: number[];
}

export const SubminNFT = ({ value, positions }: ISubmit) => {
  const [{
    name,
    category,
    amount,
    price,
    weight,
  }, setMerchandies] = useState<IMerchandise>({
    name: "",
    category: "",
    amount: "",
    price: "",
    weight: "",
  })
  const addd = useAdd()

  const colorsObj = useMemo(() => {
    const colors: Dictionary<number[]> = {}
    map(positions, item => {
      colors[value[item]] ? colors[value[item]].push(item) : colors[value[item]] = [item]
    })
    return colors
  }, [value, positions])

  const valueStr = useMemo(() => {
    let str = ""
    let min = Math.min(...positions)
    for (let i in colorsObj) {
      //再对颜色排个序 小的放前面
      const positions = orderBy(map(colorsObj[i], ite => ite - min)).join("A")
      str += `${i.slice(1)}${positions}`
    }
    return str
  }, [value, positions, colorsObj])

  const get64Str = useMemo(() => {
    return string16to64(`0x${valueStr}`)
  }, [valueStr])

  const get10BigIntStr = useMemo(() => {
    return string64toBigInt10(`${get64Str}`)
  }, [get64Str])

  const get16Str = useMemo(() => {
    return stringBigInt10to16(get10BigIntStr)
  }, [get10BigIntStr])

  console.log(valueStr, "valueStr")
  console.log(get64Str, "get64Str")
  console.log(get10BigIntStr, "get10BigIntStr")
  console.log(get16Str, "get16Str")

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
    if (!get64Str) {
      message.warn("请绘制商品");
      return;
    }
    return true;
  }, [name, category, amount, price, get64Str]);

  return (
    <div className="p-4 rounded-md text-gray-300"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        overflowY: "auto",
        width: 300,
        padding: 20
      }}>
      <div className="flex items-center text-2xl text-gray-300">发布商品&nbsp;
      <Tooltip placement="right" className="cursor-pointer" title={`建议各部位分开创建，组合性更强。`} color="#29303d">
        <ExclamationCircleOutlined />
      </Tooltip></div>
      <Label>商品名称</Label>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品名称"
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
          width: "calc(300px - 40px)",
          background: "rgba(255, 255, 255, 0.2)",
          height: 40,
          outline: "none", borderRadius: 4,
          fontSize: 14,
          color: "rgba(255, 255, 255, 0.1) !important",
          paddingLeft: 0
        }}
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
        style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品数量"
        value={amount}
        maxLength={10}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, amount: mustNum(e) })) }}
      />
      <Label>商品价格</Label>
      <input
        className="search p-2 mt-1 pl-3 shangping"
        style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
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
        style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
        placeholder="请输入商品权重"
        value={weight}
        maxLength={18}
        onChange={(e) => { setMerchandies((pre) => ({ ...pre, weight: mustNum(e) })) }}
      />
      <div className="flex justify-center items-center h-10 mt-6 text-white cursor-pointer bg-red-500" style={{ width: "calc(300px - 40px)", borderRadius: 4 }}
        onClick={() => {
          const is = checkData()
          if (!is) return
          console.log(
            {
              name,
              category,
              amount,
              price,
              weight,
            }
          )
          addd(get64Str)
        }}
      >发布</div>
    </div>
  );
};