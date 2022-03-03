import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddCard from "./pages/AddCard";
import Wallet from "./pages/Wallet";
import { useSelector } from "react-redux";
function App() {
  const { api } = useSelector((state) => state.cards);
  console.log(api);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route path="/addCard/" render={(props) => <AddCard {...props} />} />
        <Route path="/wallet" render={(props) => <Wallet {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
