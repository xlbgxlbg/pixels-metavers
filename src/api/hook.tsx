import React, { useCallback, createContext, ReactNode, useState, useContext, Dispatch } from "react";

export const Web3jsContext = createContext(
  {} as {
    accounts: any;
    contract: any;
    setAccounts: Dispatch<React.SetStateAction<any>>;
    setContract: Dispatch<React.SetStateAction<any>>;
  },
);

export const useWeb3js = () => useContext(Web3jsContext);

export const Web3jsProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  return (
    <Web3jsContext.Provider value={{ accounts, contract, setAccounts, setContract }}>
      {children}
    </Web3jsContext.Provider>
  )
}

export const useAdd = () => {
  const { accounts, contract } = useWeb3js()
  const add = useCallback(async (value: string) => {
    if (!contract) return
    await contract.methods.add(value).send({ from: accounts?.address });
  }, [accounts, contract])
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