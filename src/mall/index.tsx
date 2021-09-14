import { Dictionary, filter, find, groupBy, isEmpty, keys, map, orderBy, sortBy } from "lodash";
import { message, Select } from "antd";
import { PixelsMetaverseImgByPositionData } from "../pixels-metavers/PixelsMetaversImg";
import { useUserInfo } from "../components/UserProvider";
import { fetchBuyGoods, useRequest } from "../pixels-metavers/apiHook";
import { NoData } from "../play/PersonCenter";
import { categoryData } from "../produced/Submit";
import { useHistory } from "react-router";
import { useMemo, useState } from "react";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";
const { Option } = Select;

export const Mall = () => {
  const { goodsList, setGoodsList } = useUserInfo()
  const { accounts } = usePixelsMetaverseContract()
  const [{
    sort,
    owner,
    sale,
    category
  }, setList] = useState<Dictionary<any>>({
    sort: "",
    owner: "",
    sale: "",
    category: ""
  })

  const buyGoods = useRequest(fetchBuyGoods, {
    onSuccess: () => {
      message.success("购买成功！")
    }
  }, [])
  const history = useHistory()
  const { userInfo } = useUserInfo()

  function onSearch(val: any) {
    console.log('search:', val);
  }

  /*   const menu = (
      <Menu onClick={(val) => {
        handleMenuClick(val?.key)
      }}>
        <Menu.Item key="1">按时间降序</Menu.Item>
        <Menu.Item key="2">按时间升序</Menu.Item>
        <Menu.Item key="3">按金额降序</Menu.Item>
        <Menu.Item key="4">按金额升序</Menu.Item>
      </Menu>
    ) */

  const shopList = useMemo(() => {
    return groupBy(goodsList, item => item?.owner)
  }, [goodsList])

  const goodsCatagoryList = useMemo(() => {
    return groupBy(goodsList, item => item?.category)
  }, [goodsList])

  const saleList = useMemo(() => {
    return groupBy(goodsList, item => item?.isSale)
  }, [goodsList])

  const sortList = [
    {
      label: "按时间降序",
      value: "id-desc",
    },
    {
      label: "按时间升序",
      value: "id-asc",
    },
    {
      label: "按金额降序",
      value: "price-desc",
    },
    {
      label: "按金额升序",
      value: "price-asc",
    },
  ]

  const data = useMemo(() => {
    const ownerList = owner ? filter(goodsList, item => item?.owner === owner) : goodsList
    const categoryList = category ? filter(ownerList, item => item?.category === category) : ownerList
    const saleList = sale ? filter(categoryList, item => String(item?.isSale) === sale) : categoryList
    let sortList;
    if (sort) {
      sortList = orderBy(saleList, [sort?.split("-")[0]], [sort?.split("-")[1]]);
    } else {
      sortList = saleList
    }
    return sortList
  }, [goodsList, owner, category, sale, sort])

  return (
    <div className="flex justify-between m-auto p-6 mt-4 rounded-md" style={{
      width: 1200,
      background: "rgba(225,225,225, 0.05)",
      height: "calc(100vh - 90px)",
      color: "rgba(225, 225, 225, 0.8)"
    }}>
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <div className="h-full">
            <div className="mb-4 flex justify-between"><div className="text-2xl">商城商品</div>
              <div className="flex justify-between items-center">
                <Select
                  showSearch
                  style={{ width: 330 }}
                  allowClear
                  placeholder="选择地址"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setList((pre) => ({ ...pre, owner: val }))
                  }}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {map(keys(shopList), item => <Option value={item}>{item}</Option>)}
                </Select>
                <Select
                  style={{ width: 150, marginLeft: 20 }}
                  allowClear
                  placeholder="选择商品种类"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setList((pre) => ({ ...pre, category: val }))
                  }}
                >
                  {map(keys(goodsCatagoryList), item => <Option value={item}>{filter(categoryData, ite => ite.value === item)[0]?.label}</Option>)}
                </Select>
                <Select
                  style={{ width: 150, marginLeft: 20 }}
                  allowClear
                  placeholder="选择是否出售"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setList((pre) => ({ ...pre, sale: val }))
                  }}
                >
                  {map(keys(saleList), item => <Option value={item}>{item == "true" ? "未出售" : "已出售"}</Option>)}
                </Select>
                <Select
                  style={{ width: 200, marginLeft: 20 }}
                  allowClear
                  placeholder="选择排序"
                  optionFilterProp="children"
                  onChange={(val) => {
                    setList((pre) => ({ ...pre, sort: val }))
                  }}
                >
                  {map(sortList, item => <Option value={item?.value}>{item?.label}</Option>)}
                </Select>
                {/* <Dropdown overlay={menu} placement="bottomRight">
                  <div className="flex items-center justify-center rounded-md cursor-pointer contect ml-4" style={{ height: 34, width: 40, marginTop: -1 }}>···</div>
                </Dropdown> */}
              </div>
            </div>
            {!isEmpty(data) ? <div className="flex flex-wrap overflow-y-scroll" style={{ height: "calc(100vh - 170px)" }}>
              {
                map(data, (item, i) => {
                  return (
                    <div key={item?.id + accounts?.newworkId} className="p-2 mb-4 flex-col flex" style={{
                      background: "rgba(225,225,225, 0.1)",
                      borderRadius: 5,
                      height: 216 + 100,
                      width: 216,
                      marginRight: i % 5 === 4 ? 0 : 17
                    }}>
                      <PixelsMetaverseImgByPositionData data={{ ...item, positions: item.data }} size={200} style={{ borderRadius: 4, background: item?.bgColor || userInfo?.user?.bgColor || "#e1e1e11a", cursor: "pointer", boxShadow: "0px 0px 5px rgba(225,225,225,0.3)" }} />
                      <div className="flex flex-col justify-between flex-1 mt-4" style={{ fontSize: 12, width: 200 }}>
                        <div className="text-right flex-1" style={{ height: 40, textOverflow: "ellipsis", overflow: "hidden" }}>{item?.name || "卡姿兰大眼睛，你值得拥有,还在等什么，快点装备我吧"}</div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex justify-between items-center">
                            <div className="p px-2 rounded-sm mr-2" style={{ background: "rgba(225, 225, 225, 0.1)" }}>ID: {item?.id}</div>
                            <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{(find(categoryData, ite => ite?.value === item?.category) || {})?.label}</div>
                          </div>
                          <div className="p px-2 rounded-sm" style={{ background: "rgba(225, 225, 225, 0.1)" }}>{Number(item?.price) / (10 ** 18)}ETH</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          {item?.owner && <div className="p rounded-sm overflow-x-scroll hover:text-red-500 cursor-pointer"
                            style={{ height: 20, width: 130, textOverflow: "ellipsis", overflow: "hidden" }}
                            onClick={() => {
                              history.push(`/person-center?address=${item?.owner}`)
                            }}
                          >{item?.owner}</div>}
                          <button className="p px-2 bg-red-500 rounded-sm cursor-pointer" style={{ background: item?.isSale ? "rgba(239, 68, 68)" : "rgba(225,225,225, 0.1)", width: 60 }} onClick={() => {
                            buyGoods({
                              id: Number(item?.id),
                              price: Number(item?.price),
                              setGoodsList
                            })
                          }}
                            disabled={!item?.isSale}>{item?.isSale ? "购买" : "已出售"}</button>
                        </div>
                      </div>
                    </div>)
                })
              }
            </div> : <NoData />}
          </div>
        </div>
      </div>
    </div>
  )
}