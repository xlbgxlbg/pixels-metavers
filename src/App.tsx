import './App.css';
import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import { Website } from './home';
import { PixelsMetaverse } from './play';
import { Produced } from './produced';
import PixelsMetaverseHead from './components/PixelsMetaverseHead';
import React from 'react';
import { Web3jsProvider } from './api/hook';
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

const App = () => {
  const { hash } = useLocation()

  return (
    <Web3jsProvider>
      <HashRouter>
        <div className="relative bg-white overflow-hidden" style={{ minWidth:  1400, minHeight: 600  }}>
          <div className="relative w-full h-full min-h-screen mx-auto bg-no-repeat md:bg-contain bg-cover bg-gray-900" style={{ backgroundImage: "url(https://github.githubassets.com/images/modules/site/home/hero-glow.svg)" }}>
            {hash !== "#/" && <PixelsMetaverseHead />}
            <Switch>
              <Route path="/app" component={PixelsMetaverse} />
              <Route path="/produced" component={Produced} />
              <Route path="/" component={Website} />
              <Route exact component={Website} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Web3jsProvider>
  );
}

export default App;
