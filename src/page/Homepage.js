// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import Card from "./Card";

const Homepage = () => {
  //   const cards = useSelector((state) => state.cards);
  return (
    <div>
      <h2>Cards</h2>
      {/* <ul>
        {cards.map((card) => (
          <Card {...card} id={card.id} isFront={card.isFront} />
        ))}
      </ul> */}
      <Link to={`/add/`}>
        <button>ADD A NEW CARD</button>
      </Link>
    </div>
  );
};
export default Homepage;
