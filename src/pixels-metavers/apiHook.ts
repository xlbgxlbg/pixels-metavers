import { Dispatch, useCallback } from "react";
import { usePixelsMetaverseContract } from "./PixelsMetaversProvider";
import { Contract } from 'web3-eth-contract';

export const useAdd = () => {
  const { accounts, contract } = usePixelsMetaverseContract()
  return useCallback(async (value: string) => {
    if (!contract) return
    await contract.methods.add(value).send({ from: accounts?.address });
  }, [accounts, contract])
}

export const useDone = ({ accounts, contract }: { accounts: any, contract: any }) => {
  return useCallback(async (value) => {
    await contract.methods.done(Number(value)).send({ from: accounts[0] });
  }, [])
}

export const useRemove = ({ accounts, contract }: { accounts: any, contract: any }) => {
  return useCallback(async (value) => {
    await contract.methods.remove(Number(value)).send({ from: accounts[0] });
  }, [])
}

export const useGetListFun = () => {
  return useCallback(async (contract: Contract, setValue: Dispatch<any>) => {
    const len = await contract?.methods.getLength().call();
    let list: any[] = [];
    for (let i = 0; i < len; i++) {
      let item = await contract?.methods.lists(i).call()
      list.push(item)
    }
    setValue(list)
  }, [])
}