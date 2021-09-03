import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Website } from './home';
import PixelsMetaverse from './play';
import { Produced } from './produced';
import { NetworkContextName } from './hook/misc';
import getLibrary from './hook/getLibrary';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import React from 'react';
import { Web3ReactManager } from './hook/Web3ReactManager';
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

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <HashRouter>
          <Web3ReactManager>
            <div className="relative bg-white overflow-hidden">
              <div className="relative w-screen h-full min-h-screen mx-auto bg-no-repeat md:bg-contain bg-cover bg-gray-900" style={{ backgroundImage: "url(https://github.githubassets.com/images/modules/site/home/hero-glow.svg)" }}>
                <Switch>
                  <Route path="/app" component={PixelsMetaverse} />
                  <Route path="/produced" component={Produced} />
                  <Route path="/" component={Website} />
                  <Route exact component={Website} />
                </Switch>
              </div>
            </div>
          </Web3ReactManager>
        </HashRouter>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
