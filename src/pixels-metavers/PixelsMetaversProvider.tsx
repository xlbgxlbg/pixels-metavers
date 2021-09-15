import React, { useCallback, useEffect, createContext, ReactNode, useState, useContext, Dispatch, useRef, useMemo } from "react";
import Web3 from "web3";
import PixelsMetaverseContract from "../contracts/PixelsMetavers.json";
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { IConfigOptions, IPixelsMetaverseImgByPositionData, TPostions } from "./PixelsMetaversImg";
import { Dictionary, map } from "lodash";
import { useConvertedPostion, useDealClick, useGetClickGradPosition } from "./canvasHook";
import { LoadingProvider } from "../components/Loading";

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
        address: address[0],
        networkId
      }))

      setContract(contract)

      /* contract.events.HandleList()
        .on("connected", (subscriptionId: string) => {
          console.log(contract)
          console.log(subscriptionId, "Events 已连接");
        })
        .on('data', function (e: any) {
          setEvent(e)
        }) */
    } else {
      setContract(undefined)
      alert("暂无该网络像素元宇宙合约，请切换至Ropsten网络查看")
    }
  }, [web3, networkId])
}

export const PixelsMetaverseContextProvider = ({ children, web3, networkId, currentAddress }: { children: ReactNode, web3: Web3, networkId: number, currentAddress: string }) => {
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
      web3: web3,
      address: currentAddress,
      networkId
    }))
  }, [web3, networkId, currentAddress])

  useEffect(() => {
    if (isNaN(networkID)) return
    getContractInfo(setContract, setEvent, setAccounts)
  }, [networkID])

  return (
    <PixelsMetaverseContext.Provider value={{ accounts, contract, setAccounts, setContract, event, setEvent }}>
      <LoadingProvider>
        {children}
      </LoadingProvider>
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
    selectList: string[];
    setSelectList: Dispatch<React.SetStateAction<string[]>>;
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
    bgImgUp: "",
    bgColor: data.bgColor || "transparent",
    gridColor: data.gridColor || "#e1e1e1",
    isHandDraw: !!handDraw
  });
  const [selectList, setSelectList] = useState<string[]>([])

  const [positions, setPositions] = useState<TPostions>({})
  const [positionsArr, setPositionsArr] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const dealClick = useDealClick()
  const getGradPosition = useGetClickGradPosition()
  const getPositionData = useConvertedPostion()

  useEffect(() => {
    if (!data.positions) return
    if(data.positions === "empty"){
      setPositions({})
    }
    let selectData: Dictionary<any> = {}

    map(selectList, item => {
      const positionsData = getPositionData({
        positions: item
      })
      selectData = { ...selectData, ...positionsData }
    })

    const positionObj = getPositionData(data)
    setPositions({ ...positionObj, ...selectData })
  }, [data.positions, selectList])

  useEffect(() => {
    dealClick?.setValue({ ...positions })
  }, [positions, dealClick?.setValue])

  return (
    <PixelsMetaverseHandleImgContext.Provider
      value={{
        config,
        setConfig,
        positions,
        setPositions,
        canvasRef,
        dealClick,
        canvas2Ref,
        getGradPosition,
        positionsArr,
        setPositionsArr,
        selectList,
        setSelectList
      }}
    >
      {children}
    </PixelsMetaverseHandleImgContext.Provider>
  )
}