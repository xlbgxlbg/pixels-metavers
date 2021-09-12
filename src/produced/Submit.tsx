import { ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Tooltip, Select, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Dictionary, find, keys, map } from 'lodash';
import { usePixelsMetaverseContract, usePixelsMetaverseHandleImg } from '../pixels-metavers/PixelsMetaversProvider';
import { fetchApplication, fetchPostGoods, fetchRegister, fetchUserInfo, useApplication, useGetGoodsList, usePostGoods, useRegister, useRequest } from '../pixels-metavers/apiHook';
import { useUserInfo } from '../components/UserProvider';
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
    label: "胡子",
    value: "beard"
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

export const SubminNFT = () => {
  const { positionsArr, setPositionsArr, dealClick: { value, clear } } = usePixelsMetaverseHandleImg()
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
  const [positionData, setPostionData] = useState("")
  const [shopName, setShopName] = useState("")
  const [isMerchant, setIsMerchant] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { event } = usePixelsMetaverseContract()
  //const postGoods = usePostGoods()
  const getShopList = useGetGoodsList()
  //const application = useApplication()
  const { userInfo } = useUserInfo()
  const { accounts } = usePixelsMetaverseContract()
  //const register = useRegister()
  const getUserInfo = useRequest(fetchUserInfo)

  const application = useRequest(fetchApplication, {
    onSuccess: () => {
      getUserInfo({
        address: userInfo?.user?.account
      })
    }
  }, [userInfo?.user?.account])


  const postGoods = useRequest(fetchPostGoods, {
    onSuccess: () => {
      message.success("商品发布成功！")
      setIsModalVisible(false)
      setMerchandies({
        name: "",
        category: "",
        amount: "",
        price: "",
        weight: "",
      })
      clear()
      setPositionsArr([])
    },
    onFail: ()=>{
      setIsModalVisible(false)
    }
  }, [
    userInfo?.user?.account,
    name,
    category,
    amount,
    price,
    weight
  ])

  const register = useRequest(fetchRegister, {
    onSuccess: () => {
      getUserInfo({
        address: userInfo?.user?.account
      })
    }
  }, [userInfo?.user?.account])
  //const radixFun = new (require("radix.js"));

  useEffect(() => {
    console.log(event, "submit")
    setIsModalVisible(false);
    getShopList()
  }, [event])

  const min = useMemo(() => Math.min(...positionsArr), [positionsArr])

  const handleOk = useCallback(() => {
    //const str17To92 = stringRadixDeal(positionData, 16, 36)
    //const str17 = stringRadixDeal(str17To92, 36, 16)
    const nftData = `${positionData}${min}`
    const data = {
      name,
      category,
      amount,
      price,
      weight,
      data: nftData
    }
    console.log(data)
    let avatar = JSON.parse(localStorage.getItem("avatar") || "[]")
    //find(avatar, item => item.data === nftData) || avatar.push(data)
    //localStorage.setItem("avatar", JSON.stringify(avatar))
    console.log(avatar[0])
    postGoods({
      value: data
    })
    //setIsModalVisible(false);
  }, [positionData, min]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const colorsObj = useMemo(() => {
    const colors: Dictionary<number[]> = {}
    map(positionsArr, item => {
      colors[value[item]] ? colors[value[item]].push(item) : colors[value[item]] = [item]
    })
    return colors
  }, [value, positionsArr])

  const getPositionStr = useCallback(() => {
    let str = ""
    let min = Math.min(...positionsArr)
    const colorsArrBySort = keys(colorsObj).sort((a, b) => parseInt(a.slice(1), 16) - parseInt(b.slice(1), 16))
    console.log(colorsObj)
    for (let i = 0; i < colorsArrBySort.length; i++) {
      //再对颜色排个序 小的放前面
      const position = map(colorsObj[colorsArrBySort[i]], ite => (ite - min).toString(36)).join("|")
      //const positions = orderBy(colorsObj[colorsArrBySort[i]]).join("")
      str += `${parseInt(colorsArrBySort[i].slice(1), 16).toString(36)}-${position}-`
      //str += `${colorsArrBySort[i].slice(1)}${positions}`
    }
    return `${str}`
  }, [value, positionsArr, colorsObj, min])

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

  console.log(userInfo, "userInfo")

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
        </Tooltip>
      </div>
      { !userInfo?.user?.account?.includes("0000000000000000000000000") && userInfo?.user?.isMerchant ? <div>
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
          defaultValue={category}
          placeholder="请选择商品种类"
          optionFilterProp="children"
          onChange={(e: string) => { setMerchandies((pre) => ({ ...pre, category: e })) }}
        >
          {
            map(categoryData, item => <Option key={item.value} value={item.value}>{item.label}</Option>)
          }
        </Select>
        <Label>商品数量(最多可发行9个)</Label>
        <input
          className="search p-2 mt-1 pl-3 shangping"
          style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
          placeholder="请输入商品数量"
          value={amount}
          maxLength={1}
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
        <div className="flex justify-center items-center h-10 mt-6 text-white cursor-pointer bg-red-500" style={{ width: "100%", borderRadius: 4 }}
          onClick={() => {
            const is = checkData()
            if (!is) return
            const positionData = getPositionStr()
            setPostionData(positionData)
            if (!positionData) {
              message.warn("请绘制商品");
              return;
            }
            setIsModalVisible(true);
          }}
        >发布</div>
      </div> : <div>
        <Label>店铺名称</Label>
        <input
          className="search p-2 mt-1 pl-3 shangping"
          style={{ width: "calc(300px - 40px)", background: "rgba(255, 255, 255, 0.2)", borderRadius: 4 }}
          placeholder="请输入店铺名称"
          value={shopName}
          maxLength={15}
          onChange={(e) => { setShopName(e.target.value) }}
        />
        <button className="flex justify-center items-center h-10 mt-6 text-white cursor-pointer bg-red-500" style={{ width: "100%", borderRadius: 4, cursor: userInfo?.user?.account?.includes("0000000000000000000000000") ? "no-drop" : "pointer" }}
          onClick={() => {
            if (!shopName) {
              message.warn("请输入店铺名称");
              return;
            }
            application({
              name: shopName,
              index: Number(userInfo?.user?.index)
            })
          }}
          disabled={userInfo?.user?.account?.includes("0000000000000000000000000")}
        >申请入驻</button>
        {userInfo?.user?.account?.includes("0000000000000000000000000") && <div className="mt-4">你还不是宇宙创始居民，请
        <span className="text-red-500 cursor-pointer" onClick={() => {
            register()
          }}>激活</span>自己的元宇宙身份！</div>}
      </div>}

      <Modal title="是否发布商品" okText={positionData?.length >= 64 ? "资产多，我不担心，硬核提交" : "确认"} cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>是否确认发布该商品？</p>
        {/* <p>{`ID${positionData}`}</p> */}
        <p>{positionData?.length >= 50 && "当前数据量较大，可能消耗的GAS较多，且有可能提交不成功，请问是否继续提交数据？"}</p>
      </Modal>
    </div >
  );
};