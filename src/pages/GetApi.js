import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const GetApi = () => {
  const { status } = useSelector((state) => state.cards);
  return (
    <>
      <h1>E-Wallet App </h1>

      <p>{status}</p>

      {status === null ? <Link to={"/wallet"}></Link> : null}
    </>
  );
};
export default GetApi;
