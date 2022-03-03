import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInfo } from "../redux/slices/cardSlice";
const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>E-Wallet App </h1>

      <Link to="/wallet">
        <button
          onClick={() => {
            dispatch(getInfo());
          }}
        >
          Open Wallet
        </button>
      </Link>
    </>
  );
};
export default Homepage;
