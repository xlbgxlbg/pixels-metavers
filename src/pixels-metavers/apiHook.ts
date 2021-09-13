import { Dispatch, useCallback } from "react";
import { usePixelsMetaverseContract } from "./PixelsMetaversProvider";
import { Contract } from 'web3-eth-contract';
import { IMerchandise } from "../produced/Submit";
import { useLoading } from "../components/Loading";
import { message } from "antd";
import { cloneDeep, map } from "lodash";

export interface IHandle {
  onSuccess?: () => void,
  onFail?: () => void
}

export interface IArgContract { contract: Contract, accounts: any }

export const useRequest = (
  fetch: (argContract: IArgContract, arg?: any) => Promise<void>,
  {
    onSuccess,
    onFail
  }: IHandle = {},
  delay: any[] = []
) => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading, closeLoading } = useLoading()

  return useCallback(async (arg?: any) => {
    if (!contract || !accounts) return
    try {
      !arg?.closeLoading && openLoading()
      fetch({ accounts, contract }, arg).then(() => {
        closeDelayLoading()
        onSuccess && onSuccess()
      }).catch((error) => {
        closeLoading()
        onFail && onFail()
        error?.message && message.warning(error?.message)
      })
    } catch (error) {
      closeLoading()
      onFail && onFail()
      error?.message && message.warning(error?.message)
    }
  }, [contract, accounts, openLoading, ...delay])
}

export const fetchUserInfo = async (argContract: IArgContract, arg: { address: string, setUserInfo: Dispatch<any> }) => {
  const info = await argContract?.contract?.methods.user(arg.address).call();
  arg.setUserInfo && arg.setUserInfo(info)
}

export const fetchUserBaseInfo = async (argContract: IArgContract, arg: { address: string, setUserBaseInfo: Dispatch<any> }) => {
  const info = await argContract?.contract?.methods.user(arg.address).call();
  arg.setUserBaseInfo && arg.setUserBaseInfo(info)
}

export const fetchRegister = async (argContract: IArgContract) => {
  await argContract?.contract.methods.register().send({ from: argContract?.accounts?.address });
}

export const fetchGetGoodsInfo = async (argContract: IArgContract, arg: { id: number, setGoodsList: Dispatch<React.SetStateAction<any[]>> }) => {
  const goods = await argContract?.contract.methods.goods(arg?.id).call();
  arg?.setGoodsList && arg?.setGoodsList((pre) => {
    const list = cloneDeep(pre)
    return map(list, item => {
      if (item?.id == goods.id) {
        return goods
      }
      return item
    })
  })
}

export const fetchGetGoodsIdList = async (argContract: IArgContract, arg?: { setValue: Dispatch<React.SetStateAction<any[]>>, newNumber?: number }) => {
  const idList = await argContract?.contract?.methods.getGoodsList().call();
  const len = idList.length || 0;
  //let list: any[] = [];
  for (let i = len - 1; i >= len - (arg?.newNumber || len); i--) {
    console.log(Number(idList[i]))
    let item = await argContract?.contract?.methods.goods(Number(idList[i])).call()
    arg?.setValue && !arg.newNumber && arg?.setValue((pre) => ([...pre, item]))
    arg?.setValue && arg.newNumber && arg?.setValue((pre) => ([item, ...pre]))
    //list.push()
  }
}

export const fetchSetConfig = async (argContract: IArgContract, arg: { value: any }) => {
  await argContract?.contract.methods.setConfig(arg.value.bgColor, arg.value.gridColor, arg.value.withGrid).send({ from: argContract?.accounts?.address });
}

export const fetchApplication = async (argContract: IArgContract, arg: { name: string }) => {
  await argContract?.contract.methods.application(arg?.name).send({ from: argContract?.accounts?.address });
}

export const fetchPostGoods = async (argContract: IArgContract, arg: { value: IMerchandise }) => {
  await argContract?.contract.methods.postGoods(
    arg?.value?.name,
    arg?.value?.category,
    arg?.value?.data,
    String(Number(arg?.value?.price) * (10 ** 18)),
    Number(arg?.value?.amount),
    arg?.value?.bgColor
  ).send({ from: argContract?.accounts?.address });
}

export const fetchBuyGoods = async (argContract: IArgContract, arg: { id: number, price: number, setGoodsList: Dispatch<React.SetStateAction<any[]>> }) => {
  await argContract?.contract.methods.buyGoods(arg.id).send({ from: argContract?.accounts?.address, value: arg.price });
  fetchGetGoodsInfo(argContract, { id: arg?.id, setGoodsList: arg?.setGoodsList })
}

export const fetchOutfit = async (argContract: IArgContract, arg: { value: any, setGoodsList: Dispatch<React.SetStateAction<any[]>> }) => {
  await argContract?.contract.methods.outfit(arg?.value.id, arg?.value.isOutfit).send({ from: argContract?.accounts?.address });
  fetchGetGoodsInfo(argContract, { id: arg?.value.id, setGoodsList: arg?.setGoodsList })
}

export const fetchUserInfo1 = () => {
  return async (argContract: IArgContract, arg: { address: string, setUserInfo: Dispatch<any> }) => {
    const info = await argContract?.contract?.methods.userObj(arg.address).call();
    console.log(info, "info")
    arg.setUserInfo && arg.setUserInfo((pre: any) => ({
      ...pre,
      user: info
    }))
  }
}

export const fetchUserBaseInfo1 = () => {
  return async (argContract: IArgContract, arg: { address: string, setUserBaseInfo: Dispatch<any> }) => {
    const info = await argContract?.contract?.methods.userObj(arg.address).call();
    console.log(info, "info")
    arg.setUserBaseInfo && arg.setUserBaseInfo(info)
  }
}

export const fetchRegister1 = () => {
  return async (argContract: IArgContract) => {
    await argContract?.contract.methods.register().send({ from: argContract?.accounts?.address });
  }
}

export const fetchGetUserAssets1 = () => {
  return async (argContract: IArgContract, arg: { address: string, setAssetsInfo: Dispatch<any> }) => {
    const list = await argContract?.contract?.methods.getUserAssets(arg?.address).call();
    console.log(list, 'fetchGetUserAssets')
    arg?.setAssetsInfo && arg?.setAssetsInfo([...list])
  }
}

export const fetchGetShopGoods1 = () => {
  return async (argContract: IArgContract, arg: { address: string, setShopGoods: Dispatch<any> }) => {
    const list = await argContract?.contract?.methods.getShopGoods(arg?.address).call();
    console.log(list, 'fetchGetShopGoods')
    arg?.setShopGoods && arg?.setShopGoods([...list])
  }
}

export const fetchGetShopInfo1 = () => {
  return async (argContract: IArgContract, arg: { address: string }) => {
    await argContract?.contract.methods.shopObj(arg?.address).call();
  }
}

export const fetchGetGoodsInfo1 = () => {
  return async (argContract: IArgContract, arg: { id: number }) => {
    await argContract?.contract.methods.goodsObj(arg?.id).call();
  }
}

export const fetchGetUserList1 = () => {
  return async (argContract: IArgContract, arg: {}) => {
    const len = await argContract?.contract?.methods.getUserLength().call();
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await argContract?.contract?.methods.userList(i).call()
      list.push(item)
    }
  }
}

export const fetchGetShopList1 = () => {
  return async (argContract: IArgContract, setValue: Dispatch<React.SetStateAction<any[]>>) => {
    const len = await argContract?.contract?.methods.getShopLength().call();
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await argContract?.contract?.methods.shopList(i).call()
      list.push(item)
    }
    setValue(list)
  }
}

export const fetchGetGoodsList1 = () => {
  return async (argContract: IArgContract, arg?: { setValue: Dispatch<React.SetStateAction<any[]>>, to?: number }) => {
    const lenght = await argContract?.contract?.methods.getGoodsLength().call();
    let list: any[] = [];
    let count = arg?.to ? (arg?.to < lenght ? arg?.to : lenght) : lenght
    for (let i = lenght - 1; i >= lenght - count; i--) {
      let item = await argContract?.contract?.methods.goodsList(i).call()
      list.push(item)
    }
    console.log(list, "list")
    arg?.setValue && arg?.setValue(list)
  }
}

export const fetchMint1 = () => {
  return async (argContract: IArgContract, arg: { ids: number[] }) => {
    await argContract?.contract.methods.mint(arg.ids).send({ from: argContract?.accounts?.address });
  }
}

export const fetchSetConfig1 = () => {
  return async (argContract: IArgContract, arg: { value: any }) => {
    await argContract?.contract.methods.setConfig(arg.value.bgColor, arg.value.gridColor, arg.value.withGrid, arg.value.index).send({ from: argContract?.accounts?.address });
  }
}

export const fetchApplication1 = () => {
  return async (argContract: IArgContract, arg: { name: string, index: number }) => {
    await argContract?.contract.methods.application(arg?.name, arg.index).send({ from: argContract?.accounts?.address });
  }
}

export const fetchPostGoods1 = () => {
  return async (argContract: IArgContract, arg: { value: IMerchandise }) => {
    await argContract?.contract.methods.postGoods(
      arg?.value?.name,
      arg?.value?.category,
      arg?.value?.data,
      String(Number(arg?.value?.price) * (10 ** 18)),
      Number(arg?.value?.amount),
      arg?.value?.bgColor
    ).send({ from: argContract?.accounts?.address });
  }
}

export const fetchBuyGoods1 = () => {
  return async (argContract: IArgContract, arg: { id: number, goodsIndex: number, shopIndex: number, price: number }) => {
    await argContract?.contract.methods.buyGoods(arg.id, arg?.goodsIndex, arg?.shopIndex).send({ from: argContract?.accounts?.address, value: arg.price });
  }
}

export const fetchOutfit1 = () => {
  return async (argContract: IArgContract, arg: { value: any }) => {
    await argContract?.contract.methods.outfit(arg?.value.id, arg?.value.index, arg?.value.isOutfit).send({ from: argContract?.accounts?.address });
  }
}

export const useGetUserInfo = () => {
  const { contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading } = useLoading()
  return useCallback(async (address: string, setUserInfo: Dispatch<any>) => {
    openLoading()
    if (!contract) return
    const info = await contract.methods.userObj(address).call();
    setUserInfo((pre: any) => ({
      ...pre,
      user: info
    }))
    closeDelayLoading()
  }, [contract])
}

export const useGetUserAssets = () => {
  const { contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading } = useLoading()
  return useCallback(async (address: string, setUserInfo: Dispatch<any>) => {
    openLoading()
    if (!contract) return
    const list = await contract?.methods.getUserAssets(address).call();
    console.log(list)
    setUserInfo((pre: any) => ({
      ...pre,
      assets: list
    }))
    closeDelayLoading()
  }, [contract])
}

export const useGetShopInfo = () => {
  const { contract } = usePixelsMetaverseContract()
  return useCallback(async (address: string) => {
    if (!contract) return
    await contract.methods.shopObj(address).call();
  }, [contract])
}

export const useGetGoodsInfo = () => {
  const { contract } = usePixelsMetaverseContract()
  return useCallback(async (id: number) => {
    if (!contract) return
    await contract.methods.goodsObj(id).call();
  }, [contract])
}

export const useGetUserList = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async () => {
    const len = await contract?.methods.getUserLength().call();
    console.log(len, "len")
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await contract?.methods.userList(i).call()
      list.push(item)
    }
    console.log(list)
  }, [accounts, contract])
}

export const useGetShopList = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async () => {
    const len = await contract?.methods.getShopLength().call();
    console.log(len, "len")
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await contract?.methods.shopList(i).call()
      list.push(item)
    }
    console.log(list)
  }, [accounts, contract])
}

export const useGetGoodsList = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async () => {
    const len = await contract?.methods.getShopLength().call();
    console.log(len, "len")
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await contract?.methods.goodsList(i).call()
      list.push(item)
    }
    console.log(list)
  }, [accounts, contract])
}

export const useMint = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async (ids: number[]) => {
    if (!contract) return
    await contract.methods.mint(ids).send({ from: accounts?.address });
  }, [accounts, contract])
}

export const useSetConfig = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading } = useLoading()
  return useCallback(async (value: any) => {
    if (!contract) return
    openLoading()
    await contract.methods.setConfig(value.bgColor, value.gridColor, value.withGrid, value.index).send({ from: accounts?.address });
    closeDelayLoading()
  }, [accounts, contract])
}

export const useRegister = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading, closeLoading } = useLoading()
  return useCallback(async () => {
    if (!contract) return
    try {
      openLoading()
      await contract.methods.register().send({ from: accounts?.address });
      closeDelayLoading()
    } catch (error) {
      closeLoading()
      error?.message && message.warning(error?.message)
    }
  }, [accounts, contract])
}

export const useApplication = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading, closeLoading } = useLoading()
  return useCallback(async (name: string) => {
    if (!contract) return
    try {
      openLoading()
      await contract.methods.application(name).send({ from: accounts?.address });
      closeDelayLoading()
    } catch (error) {
      closeLoading()
      error?.message && message.warning(error?.message)
    }
  }, [accounts, contract])
}

export const usePostGoods = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async (value: IMerchandise) => {
    if (!contract) return
    await contract.methods.postGoods(
      value.name,
      value.category,
      Number(value.amount),
      Number(value.price) * (10 ** 10),
      Number(value.weight || 0),
      value.data
    ).send({ from: accounts?.address });
  }, [accounts, contract])
}

export const useBuyGoods = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async (id: number) => {
    if (!contract) return
    await contract.methods.buyGoods(id).send({ from: accounts?.address });
  }, [accounts, contract])
}

export const useOutfit = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  const { closeDelayLoading, openLoading } = useLoading()
  return useCallback(async (value: any) => {
    if (!contract) return
    openLoading()
    await contract.methods.outfit(value.id, value.index, value.isOutfit).send({ from: accounts?.address });
    closeDelayLoading()
  }, [accounts, contract])
}

export const useGetListFun = () => {
  return useCallback(async (contract: Contract, setValue: Dispatch<any>) => {
    const len = await contract?.methods.getShopLength().call();
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await contract?.methods.shopList(i).call()
      list.push(item)
    }
    setValue(list)
  }, [])
}