import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <h1>E-Wallet App </h1>

      <Link to="/wallet">
        <button>Open Wallet</button>
      </Link>
    </>
  );
};
export default Homepage;
