import styled from "styled-components";
import * as PropTypes from "prop-types";
import { ellipseAddress, getChainData } from "../helpers/utilities";
import { transitions } from "../styles";
import { Dropdown, Menu } from 'antd';
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useWeb3js } from "../api/hook";
import { useEffect } from "react";

const SHeader = styled.div`
  margin-bottom: 1px;
  height: 70px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
`;

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "0px auto 1em" : "0")};
`;

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;
  cursor: pointer;

  opacity: ${({ connected }) => (connected ? 1 : 0)};
  visibility: ${({ connected }) => (connected ? "visible" : "hidden")};
  pointer-events: ${({ connected }) => (connected ? "auto" : "none")};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.5;
  }
`;

const Network = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;

  opacity: ${({ connected }) => (connected ? 1 : 0)};
  visibility: ${({ connected }) => (connected ? "visible" : "hidden")};
  pointer-events: ${({ connected }) => (connected ? "auto" : "none")};
`;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
  toConnect: () => void;
  web3: any;
  networkId: number
}

const nav = [
  { label: "首页", path: "/app" },
  { label: "发布商品", path: "/produced" },
  { label: "合约商城", path: "/mall" },
  { label: "个人中心", path: "/person-center" },
]

const Header = (props: IHeaderProps) => {
  const { connected, address, chainId, killSession, toConnect, web3, networkId } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  const onSearch = () => console.log("value");
  const history = useHistory()
  const { pathname } = useLocation()
  const { setAccounts } = useWeb3js()

  useEffect(() => {
    if (!web3) return
    setAccounts({
      web3,
      networkId,
      address
    })
  }, [web3, networkId, address])

  return (
    <div className="flex items-center px-4 justify-end text-l fixed w-full header" onClick={() => {
    }}>
      <SHeader {...props}>
        <div className="text-2xl cursor-pointer" onClick={() => { history.push("/") }}>像素元宇宙，从头开始</div>
        <div className="flex justify-around items-center w-96">
          {nav.map(item => {
            return <div key={item?.label} style={{ color: pathname === item?.path ? "#EF4444" : "rgba(225,225,225,.9)" }} className="cursor-pointer hover:text-red-500"
              onClick={() => { history.push(item?.path) }}>{item?.label}</div>
          })}
        </div>
        <div className="flex justify-end" style={{ width: 500 }}>
          <div className="mr-4 flex items-center search-box">
            <input
              className="py-2 pl-4 mr-2 bg-transparent search"
              placeholder="请输入以太坊钱包地址"
            />
            <div className="flex items-center justify-center h-full w-20 bg-red-500 cursor-pointer hover:text-white"
              style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
              onClick={onSearch}>查询</div>
          </div>

          {address && chainData ? (
            <div className="bg-black contect px-4 rounded-md"><SActiveAccount>
              <SAddress connected={connected}>{ellipseAddress(address)}</SAddress>
              <Network connected={connected} style={{ left: 0 }}>
                {chainData.name}
              </Network>
              <SDisconnect connected={connected} onClick={killSession}>
                {"断开连接"}
              </SDisconnect>
            </SActiveAccount>
            </div>)
            : <div className="flex items-center justify-center rounded-md cursor-pointer contect w-24" style={{ height: 40 }} onClick={() => {
              toConnect()
            }} >连接钱包</div>
          }
        </div>
      </SHeader>
      {/* <Dropdown overlay={menu} placement="bottomLeft">
        <div className="flex items-center justify-center rounded-md cursor-pointer contect ml-4" style={{ height: 40, width: 40, marginTop: -1 }}>···</div>
      </Dropdown> */}
    </div>
  );
};

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string,
};

export default Header;
