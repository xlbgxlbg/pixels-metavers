/* // @ts-ignore
import { useMemo } from "react";
import Web3Modal from "web3modal";
import { getChainData } from "./helpers/utilities";
import React, { useCallback, useEffect, createContext, ReactNode, useState, useContext } from "react";
// @ts-ignore
import WalletConnectProvider from "@walletconnect/web3-provider";
// @ts-ignore
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import { Bitski } from "bitski";
import { apiGetAccountAssets } from "./helpers/api";
//import MyContract from "../contracts/Todolist.json";
//import getWeb3 from "../getWeb3";

export const Web3Context = createContext(
  {} as {
    accounts: any;
    contract: any;
  },
);

export const useWeb3js = () => useContext(Web3Context);

export const Web3JSProvider = ({ children }: { children: ReactNode }) => {
  const [{ accounts, contract }, setContractInfo] = useState({ accounts: null, contract: null })
  const [list, setList] = useState<any[]>([]);
  const [event, setEvent] = useState<any[]>([]);
  const connectWeb3js = useCallback(async () => {

    try {
      //const web3 = await getWeb3();
      //const accounts = await web3.eth.getAccounts();
      //const networkId = await web3.eth.net.getId();

    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

  }, [])

  useEffect(() => {
    connectWeb3js()
  }, [])

  return (
    <Web3Context.Provider value={{ accounts, contract }}>
      {children}
    </Web3Context.Provider>
  )
}


constructor(props: any) {
  super(props);
  this.state = {
    ...INITIAL_STATE
  };

  this.web3Modal = new Web3Modal({
    network: this.getNetwork(),
    cacheProvider: true,
    providerOptions: this.getProviderOptions()
  });
}

export const useGetWeb3Modal = async () => {
  const network = useGetNetwork(1)
  const providerOptions = useGetProviderOptions()
  return useMemo(() => {
    return new Web3Modal({
      network,
      cacheProvider: true,
      providerOptions
    })
  }, [])
}

public componentDidMount() {
  if (this.web3Modal.cachedProvider) {
    this.onConnect();
  }
}

export const useSubscribeProvider = async (provider: any) => {
  const resetApp = useResetApp()
  const getAccountAssets = useGetAccountAssets()
  const web3js = useWeb3js()
  if (!provider.on) {
    return;
  }
  provider.on("close", () => resetApp());
  provider.on("accountsChanged", async (accounts: string[]) => {
    //await this.setState({ address: accounts[0] });
    await getAccountAssets();
  });
  provider.on("chainChanged", async (chainId: number) => {
    const { web3 } = web3js;
    const networkId = await web3.eth.net.getId();
    //await this.setState({ chainId, networkId });
    await getAccountAssets();
  });

  provider.on("networkChanged", async (networkId: number) => {
    const { web3 } = web3js;
    const chainId = await web3.eth.chainId();
    //await this.setState({ chainId, networkId });
    await getAccountAssets();
  });
}

public onConnect = async () => {
  const web3Modal = useGetWeb3Modal()
  const provider = await (await web3Modal).connect();

  await this.subscribeProvider(provider);

  const web3: any = initWeb3(provider);

  const accounts = await web3.eth.getAccounts();

  const address = accounts[0];

  const networkId = await web3.eth.net.getId();

  const chainId = await web3.eth.chainId();

  await this.setState({
    web3,
    provider,
    connected: true,
    address,
    chainId,
    networkId
  });
  await this.getAccountAssets();
};

export const useGetNetwork = (chainId: number) => getChainData(chainId).network;

export const useGetProviderOptions = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID
      }
    },
    torus: {
      package: Torus
    },
    fortmatic: {
      package: Fortmatic,
      options: {
        key: process.env.REACT_APP_FORTMATIC_KEY
      }
    },
    authereum: {
      package: Authereum
    },
    bitski: {
      package: Bitski,
      options: {
        clientId: process.env.REACT_APP_BITSKI_CLIENT_ID,
        callbackUrl: window.location.href + "bitski-callback.html"
      }
    }
  };
  return providerOptions;
};

export const useGetAccountAssets = async () => {
  const { address, chainId } = useWeb3js();
  //this.setState({ fetching: true });
  try {
    // get account balances
    const assets = await apiGetAccountAssets(address, chainId);

    //await this.setState({ fetching: false, assets });
  } catch (error) {
    console.error(error); // tslint:disable-line
    //await this.setState({ fetching: false });
  }
};

public toggleModal = () =>
  this.setState({ showModal: !this.state.showModal });

public testSendTransaction = async () => {
  const { web3, address, chainId } = this.state;

  if (!web3) {
    return;
  }

  const tx = await formatTestTransaction(address, chainId);

  try {
    // open modal
    this.toggleModal();

    // toggle pending request indicator
    this.setState({ pendingRequest: true });

    // @ts-ignore
    function sendTransaction(_tx: any) {
      return new Promise((resolve, reject) => {
        web3.eth
          .sendTransaction(_tx)
          .once("transactionHash", (txHash: string) => resolve(txHash))
          .catch((err: any) => reject(err));
      });
    }

    // send transaction
    const result = await sendTransaction(tx);

    // format displayed result
    const formattedResult = {
      action: ETH_SEND_TRANSACTION,
      txHash: result,
      from: address,
      to: address,
      value: "0 ETH"
    };

    // display result
    this.setState({
      web3,
      pendingRequest: false,
      result: formattedResult || null
    });
  } catch (error) {
    console.error(error); // tslint:disable-line
    this.setState({ web3, pendingRequest: false, result: null });
  }
};

public testSignMessage = async () => {
  const { web3, address } = this.state;

  if (!web3) {
    return;
  }

  // test message
  const message = "My email is john@doe.com - 1537836206101";

  // hash message
  const hash = hashPersonalMessage(message);

  try {
    // open modal
    this.toggleModal();

    // toggle pending request indicator
    this.setState({ pendingRequest: true });

    // send message
    const result = await web3.eth.sign(hash, address);

    // verify signature
    const signer = recoverPublicKey(result, hash);
    const verified = signer.toLowerCase() === address.toLowerCase();

    // format displayed result
    const formattedResult = {
      action: ETH_SIGN,
      address,
      signer,
      verified,
      result
    };

    // display result
    this.setState({
      web3,
      pendingRequest: false,
      result: formattedResult || null
    });
  } catch (error) {
    console.error(error); // tslint:disable-line
    this.setState({ web3, pendingRequest: false, result: null });
  }
};

public testSignPersonalMessage = async () => {
  const { web3, address } = this.state;

  if (!web3) {
    return;
  }

  // test message
  const message = "My email is john@doe.com - 1537836206101";

  // encode message (hex)
  const hexMsg = convertUtf8ToHex(message);

  try {
    // open modal
    this.toggleModal();

    // toggle pending request indicator
    this.setState({ pendingRequest: true });

    // send message
    const result = await web3.eth.personal.sign(hexMsg, address);

    // verify signature
    const signer = recoverPersonalSignature(result, message);
    const verified = signer.toLowerCase() === address.toLowerCase();

    // format displayed result
    const formattedResult = {
      action: PERSONAL_SIGN,
      address,
      signer,
      verified,
      result
    };

    // display result
    this.setState({
      web3,
      pendingRequest: false,
      result: formattedResult || null
    });
  } catch (error) {
    console.error(error); // tslint:disable-line
    this.setState({ web3, pendingRequest: false, result: null });
  }
};

public testContractCall = async (functionSig: string) => {
  let contractCall = null;
  switch (functionSig) {
    case DAI_BALANCE_OF:
      contractCall = callBalanceOf;
      break;
    case DAI_TRANSFER:
      contractCall = callTransfer;
      break;

    default:
      break;
  }

  if (!contractCall) {
    throw new Error(
      `No matching contract calls for functionSig=${functionSig}`
    );
  }

  const { web3, address, chainId } = this.state;
  try {
    // open modal
    this.toggleModal();

    // toggle pending request indicator
    this.setState({ pendingRequest: true });

    // send transaction
    const result = await contractCall(address, chainId, web3);

    // format displayed result
    const formattedResult = {
      action: functionSig,
      result
    };

    // display result
    this.setState({
      web3,
      pendingRequest: false,
      result: formattedResult || null
    });
  } catch (error) {
    console.error(error); // tslint:disable-line
    this.setState({ web3, pendingRequest: false, result: null });
  }
};

public testOpenBox = async () => {
  function getBoxProfile(
    address: string,
    provider: any
  ): Promise<IBoxProfile> {
    return new Promise(async (resolve, reject) => {
      try {
        await openBox(address, provider, async () => {
          const profile = await getProfile(address);
          resolve(profile);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  const { address, provider } = this.state;

  try {
    // open modal
    this.toggleModal();

    // toggle pending request indicator
    this.setState({ pendingRequest: true });

    // send transaction
    const profile = await getBoxProfile(address, provider);

    let result = null;
    if (profile) {
      result = {
        name: profile.name,
        description: profile.description,
        job: profile.job,
        employer: profile.employer,
        location: profile.location,
        website: profile.website,
        github: profile.github
      };
    }

    // format displayed result
    const formattedResult = {
      action: BOX_GET_PROFILE,
      result
    };

    // display result
    this.setState({
      pendingRequest: false,
      result: formattedResult || null
    });
  } catch (error) {
    console.error(error); // tslint:disable-line
    this.setState({ pendingRequest: false, result: null });
  }
};

export const useResetApp = async () => {
  const { web3 } = useWeb3js;
  const web3Modal = useGetWeb3Modal();
  if (web3 && web3.currentProvider && web3.currentProvider.close) {
    await web3.currentProvider.close();
  }
  await (await web3Modal).clearCachedProvider();
}; */

export const a = 1