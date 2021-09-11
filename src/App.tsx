import './App.css';
import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import { Website } from './home';
import { PixelsMetaverse } from './play';
import { Produced } from './produced';
import PixelsMetaverseHead from './components/PixelsMetaverseHead';
import { useWeb3js, Web3jsProvider } from './api/hook';
import { PixelsMetaverseContextProvider } from './pixels-metavers/PixelsMetaversProvider';
import bgSvg from "./image/bg.svg"
import { Application } from './application';
import React from 'react';
import { Loading, LoadingProvider } from './components/Loading';
import { UserInfoProvider } from './components/UserProvider';
import { PersonCenter } from './person-center';
import { Mall } from './mall';

declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
    [name: string]: any;
  }
}

export const Main = () => {
  const { pathname } = useLocation()
  const { accounts } = useWeb3js()

  return (
    <div className="relative bg-white overflow-hidden" style={{ minWidth: 1400, minHeight: 600 }}>
      <div className="relative w-full h-full min-h-screen mx-auto bg-no-repeat md:bg-contain bg-cover bg-gray-900"
        style={{ backgroundImage: `url(${bgSvg})` }}>
        <PixelsMetaverseContextProvider web3={accounts?.web3} networkId={accounts?.networkId} currentAddress={accounts?.address}>
          <UserInfoProvider>
            {pathname !== "/" && <PixelsMetaverseHead />}
            <Switch>
              <Route path="/app" component={PixelsMetaverse} />
              <Route path="/produced" component={Produced} />
              <Route path="/person-center" component={PersonCenter} />
              <Route path="/mall" component={Mall} />
              <Route path="/" component={Website} />
              <Route exact component={Website} />
            </Switch>
            <Loading />
          </UserInfoProvider>
        </PixelsMetaverseContextProvider>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <HashRouter>
      <Web3jsProvider>
        <Main />
      </Web3jsProvider>
    </HashRouter>
  );
}

export default App;
