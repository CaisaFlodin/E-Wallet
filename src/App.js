import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./page/Homepage";
import AddCard from "./page/AddCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add/" render={(props) => <AddCard {...props} />} />
        <Route path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
