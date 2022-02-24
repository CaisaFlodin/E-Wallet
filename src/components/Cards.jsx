import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = () => {
  const { cardList } = useSelector((state) => state.cards);

  console.log(cardList);
  return (
    <>
      <div>
        <h2>This card is Active</h2>
        {cardList.map((card, i) => {
          return (
            <Card
              cardNumber={card.cardNumber}
              cardFirstName={card.cardFirstName}
              cardLastName={card.cardLastName}
              validMonth={card.validMonth}
              validYear={card.validYear}
              cvc={card.cvc}
              vendor={card.vendor}
              id={card.id}
              isActive={card.isActive}
            />
          );
        })}
        {cardList.length <= 3 ? (
          <Link to={"/add/"}>
            <button>Add a new card</button>
          </Link>
        ) : (
          <p>
            Your wallet have the maximum amount of 4 cards. Remove cards to add
            a new one.
          </p>
        )}
      </div>
    </>
  );
};
export default Cards;
