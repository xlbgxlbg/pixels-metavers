import { Dispatch, useCallback } from "react";
import { usePixelsMetaverseContract } from "./PixelsMetaversProvider";
import { Contract } from 'web3-eth-contract';
import { IMerchandise } from "../produced/Submit";

export const useGetUserInfo = () => {
  const { contract } = usePixelsMetaverseContract()
  return useCallback(async (address: string) => {
    if (!contract) return
    await contract.methods.userObj(address).call();
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
  return useCallback(async (value: any) => {
    if (!contract) return
    await contract.methods.setConfig(value.bgColor, value.size, value.gridColor, value.withGrid).send({ from: accounts?.address });
  }, [accounts, contract])
}

export const useApplication = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async (name: string) => {
    if (!contract) return
    await contract.methods.application(name).send({ from: accounts?.address });
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
  return useCallback(async (value: any) => {
    if (!contract) return
    await contract.methods.outfit(value.id, value.index, value.isOutfit).send({ from: accounts?.address });
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