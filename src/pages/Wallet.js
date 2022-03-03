import Cards from "../components/Cards";
import { useSelector } from "react-redux";
const Wallet = () => {
  const { api } = useSelector((state) => state.cards);
  console.log(api);
  return <Cards />;
};
export default Wallet;
