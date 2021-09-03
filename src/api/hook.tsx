import React, { useCallback, useEffect, createContext, ReactNode, useState, useContext } from "react";
import MyContract from "../contracts/Todolist.json";
import getWeb3 from "./getWeb3";

export const ContrctContext = createContext(
  {} as {
    accounts: any;
    contract: any;
    list: any[];
    event: any;
  },
);

export const useContract = () => useContext(ContrctContext);

export const ContrctProvider = ({ children }: { children: ReactNode }) => {
  const [{ accounts, contract }, setContractInfo] = useState({ accounts: null, contract: null })
  const [list, setList] = useState<any[]>([]);
  const [event, setEvent] = useState<any[]>([]);
  const connectContract = useCallback(async () => {

    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = (MyContract as any).networks[networkId];
      const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      contract.events.HandleList()
        .on("connected", function (subscriptionId: string) {
          console.log(subscriptionId, "events 已连接");
          getList(contract)
        })
        .on('data', function (e: any) {
          setEvent(e)
          getList(contract)
        })

      setContractInfo({ accounts, contract })

    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

  }, [])

  useEffect(() => {
    connectContract()
  }, [])

  const getList = useCallback(async (contract: any) => {
    const list = await getListFun(contract);
    setList(list)
  }, [])

  return (
    <ContrctContext.Provider value={{ accounts, contract, list, event }}>
      {children}
    </ContrctContext.Provider>
  )
}

export const useAdd = ({ accounts, contract }: { accounts: any, contract: any }) => {
  const add = useCallback(async (value: string) => {
    await contract.methods.add(value).send({ from: accounts[0] });
  }, [])
  return add
}

export const useDone = ({ accounts, contract }: { accounts: any, contract: any }) => {
  const done = useCallback(async (value) => {
    await contract.methods.done(Number(value)).send({ from: accounts[0] });
  }, [])
  return done
}

export const useRemove = ({ accounts, contract }: { accounts: any, contract: any }) => {
  const remove = useCallback(async (value) => {
    await contract.methods.remove(Number(value)).send({ from: accounts[0] });
  }, [])
  return remove
}

export const getListFun = async (contract: any) => {
  const len = await contract.methods.getLength().call();
  let list: any[] = [];
  for (let i = 0; i < len; i++) {
    let item = await contract.methods.lists(i).call()
    //item.content !== "" && list.push(item)
    list.push(item)
  }
  return list
}