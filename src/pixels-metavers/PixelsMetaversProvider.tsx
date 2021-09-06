import React, { useCallback, useEffect, createContext, ReactNode, useState, useContext, Dispatch } from "react";
import Web3 from "web3";
import PixelsMetaverseContract from "./contracts/PixelsMetavers.json";
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

export const PixelsMetaverseContext = createContext(
  {} as {
    accounts: any;
    contract: Contract | undefined;
    event: any;
    setAccounts: Dispatch<React.SetStateAction<any>>;
    setContract: Dispatch<React.SetStateAction<Contract | undefined>>;
    setEvent: Dispatch<React.SetStateAction<any>>;
  },
);

export const usePixelsMetaverseContract = () => useContext(PixelsMetaverseContext);

export const useGetContractInfo = (web3: Web3, networkId: number) => {
  return useCallback(async (
    setContract: Dispatch<React.SetStateAction<Contract | undefined>>,
    setEvent: Dispatch<React.SetStateAction<any>>,
    setAccounts: Dispatch<React.SetStateAction<any>>
  ) => {
    const deployedNetwork = (PixelsMetaverseContract as any).networks[networkId]
    if (deployedNetwork) {
      const contract = new web3.eth.Contract(
        PixelsMetaverseContract.abi as AbiItem[],
        deployedNetwork && deployedNetwork.address,
      );

      const address = await web3?.eth?.getAccounts()

      setAccounts((pre: any) => ({
        ...pre,
        address: address[0]
      }))

      setContract(contract)

      contract.events.HandleList()
        .on("connected", (subscriptionId: string) => {
          console.log(subscriptionId, "Events 已连接");
        })
        .on('data', function (e: any) {
          setEvent(e)
        })
    } else {
      setContract(undefined)
      alert("暂无该网络像素元宇宙合约")
    }
  }, [web3, networkId])
}

export const PixelsMetaverseContextProvider = ({ children, web3, networkId }: { children: ReactNode, web3: Web3, networkId: number }) => {
  const [accounts, setAccounts] = useState<any>({});
  const [contract, setContract] = useState<Contract | undefined>();
  const [event, setEvent] = useState<any[]>([]);
  const networkID = Number(networkId)
  const getContractInfo = useGetContractInfo(web3, networkID)

  useEffect(() => {
    if (!web3) return
    if (!networkId) return
    setAccounts((pre: any) => ({
      ...pre,
      web3: web3
    }))
  }, [web3, networkId])

  useEffect(() => {
    if (isNaN(networkID)) return
    getContractInfo(setContract, setEvent, setAccounts)
  }, [networkID])

  return (
    <PixelsMetaverseContext.Provider value={{ accounts, contract, setAccounts, setContract, event, setEvent }}>
      {children}
    </PixelsMetaverseContext.Provider>
  )
}

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