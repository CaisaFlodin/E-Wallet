import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./page/Homepage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={(props) => <Homepage {...props} />} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
