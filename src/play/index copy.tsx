
import bg from "../image/app-bg.jpeg"
import bg3 from "../image/app-bg3.jpeg"
import bg4 from "../image/app-bg4.jpg"
import bg5 from "../image/bg5.jpg"
import Web3 from "web3";
import Web3Modal from "web3modal";
import { useEffect } from "react";

const getWeb3 = async () => {
  const providerOptions = {
    /* See Provider Options Section */
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  const provider = await web3Modal.connect();

  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();

  const address = accounts[0];

  const networkId = await web3.eth.net.getId();

  console.log(address, networkId)
}

export const PixelsMetaverse = () => {
  useEffect(() => {
    getWeb3()
  }, [])

  return (
    <div className="h-screen max-h-screen bg-transparent">
      <div className="flex items-center px-4 justify-end text-l header" onClick={() => {
      }}>
        <div className="px-4 py-1 rounded-md cursor-pointer contect">连接钱包</div>
        <div className="ml-4 cursor-pointer">个人中心</div>
      </div>
      <div className="flex justify-between bg-transparent flex-1 mt-4">
        <div className="border m-4 p-4 card">
          <div>
            个人中心
          </div>
        </div>
        <div className="border m-4 card main-box" style={{}}>

        </div>
        <div className="border m-4 p-4 card" style={{ boxShadow: "5px 5px 10px rgba(225,225,225,0.3)" }}>
          <div>
            商家
          </div>
        </div>
      </div>
    </div>
  );
};