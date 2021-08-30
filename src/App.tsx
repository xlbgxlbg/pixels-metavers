import './App.css';
import { Switch, Route } from "react-router-dom";
import { Website } from './website';

function App() {
  return (
    <Switch>
      <Route path="/website" exact component={Website} />
      {/* <Route exact><Assets /></Route> */}
    </Switch>
  );
}

export default App;
