// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/Card";
// import Card from "./Card";

const Homepage = () => {
  //   const cards = useSelector((state) => state.cards);
  return (
  
    <div>
       
      <h2>This card is Active</h2>
      <Card />

      {/* <ul>
        {cards.map((card) => (
          <Card {...card} id={card.id} isFront={card.isFront} />
        ))}
      </ul> */}
      <Link to={`/add/`}>
        <button>Add a new card</button>
      </Link>
    </div>
  );
};
export default Homepage;
