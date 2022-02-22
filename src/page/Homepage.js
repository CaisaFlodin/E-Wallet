import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/Cards";
// import Card from "./Card";

const Homepage = () => {
  const cards = useSelector((state) => state.cardInfo);

  return (
    <div>
      <h2>This card is Active</h2>
      <Card {...cards} />

      <Link to={`/add/`}>
        <button>Add a new card</button>
      </Link>
    </div>
  );
};
export default Homepage;
