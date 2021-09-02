import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Website } from './home';
import PixelsMetaverse from './play';
import { Produced } from './produced';
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
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
