import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./page/Homepage";
import addCard from "./page/addCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add/" render={(props) => <addCard {...props} />} />
        <Route path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
