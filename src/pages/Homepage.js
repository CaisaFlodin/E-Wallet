import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getInfo } from "../redux/slices/cardSlice";
import { getName } from "../redux/slices/nameSlice";
import Wallet from "./Wallet";

const Homepage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getInfo());
  }, [Wallet]);

  return (
    <>
      <h1>E-Wallet App </h1>

      <p>{status}</p>

      {status === null ? (
        <Link to={"/wallet"}>
          <button
            onClick={() => {
              dispatch(getInfo());
              dispatch(getName());
            }}
          >
            Open Wallet
          </button>
        </Link>
      ) : null}
    </>
  );
};
export default Homepage;
