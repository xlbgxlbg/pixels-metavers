import './App.css';
import { Switch, Route } from "react-router-dom";
import { Website } from './home';
import PixelsMetaverse from './play';
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
    <div className="relative bg-white overflow-hidden">
      <div className="relative w-screen h-full min-h-screen mx-auto bg-no-repeat md:bg-contain bg-cover bg-gray-900" style={{ backgroundImage: "url(https://github.githubassets.com/images/modules/site/home/hero-glow.svg)" }}>
        <Switch>
          <Route path="/" exact component={Website} />
          <Route path="/app" exact component={PixelsMetaverse} />
          {/* <Route exact><Assets /></Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
