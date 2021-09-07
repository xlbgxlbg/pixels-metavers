import React, { useCallback, useEffect, createContext, ReactNode, useState, useContext, Dispatch, useRef, useMemo } from "react";
import Web3 from "web3";
import PixelsMetaverseContract from "./contracts/Todolist.json";
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { IConfigOptions, IPixelsMetaverseImgByPositionData, TData, TPostions } from "./PixelsMetaversImg";
import { Dictionary, isEmpty } from "lodash";
import { useDealClick, useGetClickGradPosition } from "./canvasHook";
import { stringRadixDeal } from "./utilities/radix";

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

export const PixelsMetaverseHandleImgContext = createContext(
  {} as {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    canvas2Ref: React.RefObject<HTMLCanvasElement>;
    config: IConfigOptions;
    positions: TPostions;
    positionsArr: number[];
    setConfig: Dispatch<React.SetStateAction<IConfigOptions>>;
    setPositions: Dispatch<React.SetStateAction<TPostions>>;
    setPositionsArr: Dispatch<React.SetStateAction<number[]>>;
    dealClick: {
      value: Dictionary<string>;
      add: (num: any, color: any) => void;
      remove: (num: any) => void;
      clear: () => void;
      setValue: Dispatch<React.SetStateAction<Dictionary<string>>>
    },
    getGradPosition: (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
      x: number;
      y: number;
    }
  },
);

export const usePixelsMetaverseHandleImg = () => useContext(PixelsMetaverseHandleImgContext);

export const PixelsMetaverseHandleImgProvider = ({ children, data, size, showGrid, handDraw }: { children: ReactNode } & IPixelsMetaverseImgByPositionData) => {
  const [config, setConfig] = useState<IConfigOptions>({
    imgSize: { width: size, height: size },
    sizeGrid: data.size === "small" ? size / 48 : size / 24,
    withGrid: !!showGrid,
    bgImg: "",
    bgColor: data.bgColor || "#638496",
    gridColor: data.gridColor || "white",
    isHandDraw: !!handDraw
  });

  const [positions, setPositions] = useState<TPostions>({})
  const [positionsArr, setPositionsArr] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const dealClick = useDealClick()
  const getGradPosition = useGetClickGradPosition()

  useEffect(() => {
    if (!data.positions) return
    if (!data.positions.includes("-")) return

    const position = data.positions?.split("-")
    let positionObj: Dictionary<string> = {}
    let postionStr = ""
    const len = position.length
    const min = Number(position[len - 1])

    for (let i = 0; i < len; i++) {
      if (i === len - 1) continue

      if (i % 2 === 0) {
        postionStr = `${parseInt(position[i], 36).toString(16)}`
        if (postionStr.length) {
          let str = ""
          for (let k = 0; k < 6 - postionStr.length; k++) {
            str += "0"
          }
          postionStr = "#" + str + postionStr
        }
        continue
      }

      if (i % 2 === 1) {
        const numArr = position[i].split("|")
        for (let j = 0; j < numArr.length; j++) {
          positionObj[Number(parseInt(numArr[j], 36)) + min] = postionStr
        }
        continue
      }
    }

    setPositions(positionObj)
  }, [data.positions])

  useEffect(() => {
    if (isEmpty(positions)) return
    dealClick?.setValue(positions)
  }, [positions])

  return (
    <PixelsMetaverseHandleImgContext.Provider value={{
      config,
      setConfig,
      positions,
      setPositions,
      canvasRef,
      dealClick,
      canvas2Ref,
      getGradPosition,
      positionsArr,
      setPositionsArr
    }}>
      {children}
    </PixelsMetaverseHandleImgContext.Provider>
  )
}