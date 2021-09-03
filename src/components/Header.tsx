import styled from "styled-components";
import * as PropTypes from "prop-types";
import Blockie from "./Blockie";
import { ellipseAddress, getChainData } from "../helpers/utilities";
import { transitions } from "../styles";
import { Menu, Dropdown } from 'antd';
import { useActiveWeb3React } from "../hook/web3";

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

const SBlockie = styled(Blockie)`
  margin-right: 10px;
`;

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-10px auto 1em" : "0")};
`;

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 26px;
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
  top: 26px;
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
  toConnect: () => void
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        平台商家
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        平台用户
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        申请入驻
      </a>
    </Menu.Item>
  </Menu>
);

const Header = (props: IHeaderProps) => {
  const { connected, address, chainId, killSession, toConnect } = props;
  const chainData = chainId ? getChainData(chainId) : null;
  const onSearch = () => console.log("value");
  const { account } = useActiveWeb3React()
  console.log(account)

  return (
    <div className="flex items-center px-4 justify-end text-l fixed w-full header" onClick={() => {
    }}>
      <SHeader {...props}>
        <div className="text-2xl">像素元宇宙，从头开始</div>
        <div className="flex">
          <div className="mr-8 flex items-center search-box">
            <input
              className="py-2 pl-4 mr-2 bg-transparent search"
              placeholder="请输入以太坊钱包地址"
            />
            <div className="flex items-center justify-center h-full w-20 bg-red-500 cursor-pointer hover:text-white"
              style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
              onClick={onSearch}>查询</div>
          </div>
          {address && chainData ? (
            <SActiveAccount>
              <SBlockie address={address} />
              <SAddress connected={connected}>{ellipseAddress(address)}</SAddress>
              <Network connected={connected} style={{ left: 10 }}>
                {chainData.name}
              </Network>
              <SDisconnect connected={connected} onClick={killSession}>
                {"中断连接"}
              </SDisconnect>
            </SActiveAccount>)
            : <div className="flex items-center justify-center rounded-md cursor-pointer contect w-36" style={{ height: 40 }} onClick={() => {
              toConnect()
            }} >连接钱包</div>
          }</div>
      </SHeader>
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className="flex items-center justify-center rounded-md cursor-pointer contect ml-4" style={{ height: 40, width: 40, marginTop: -1 }}>···</div>
      </Dropdown>
    </div>
  );
};

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string,
};

export default Header;
