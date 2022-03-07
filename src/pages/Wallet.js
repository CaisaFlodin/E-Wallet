import { useSelector } from "react-redux";
import Cards from "../components/Cards";

const Wallet = () => {
  const { status2 } = useSelector((state) => state.api);

  return (
    <div>
      <p>{status2}</p>
      {status2 === null ? <Cards /> : null}
    </div>
  );
};
export default Wallet;
