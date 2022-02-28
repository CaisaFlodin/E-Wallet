import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = () => {
  const { cardList, activeObj } = useSelector((state) => state.cards);

  console.log(cardList);
  return (
    <>
      <div>
        <h2>This card is Active</h2>
        {activeObj === cardList[0].id ? (
          <p>
            {cardList[0].cardNumber}
            <br />
            {cardList[0].cardHolderName}
            <br />
            {cardList[0].validMonth}

            {cardList[0].validYear}
            <br />
            {cardList[0].cvc}
            <br />
            {cardList[0].vendor}
          </p>
        ) : activeObj === cardList[1].id ? (
          <p>
            {cardList[1].cardNumber}
            <br />
            {cardList[1].cardHolderName}
            <br />
            {cardList[1].validMonth}

            {cardList[1].validYear}
            <br />
            {cardList[1].cvc}
            <br />
            {cardList[1].vendor}
          </p>
        ) : activeObj === cardList[2].id ? (
          <p>
            {cardList[2].cardNumber}
            <br />
            {cardList[2].cardHolderName}
            <br />
            {cardList[2].validMonth}

            {cardList[2].validYear}
            <br />
            {cardList[2].cvc}
            <br />
            {cardList[2].vendor}
          </p>
        ) : activeObj === cardList[3].id ? (
          <p>
            {cardList[3].cardNumber}
            <br />
            {cardList[3].cardHolderName}
            <br />
            {cardList[3].validMonth}

            {cardList[3].validYear}
            <br />
            {cardList[3].cvc}
            <br />
            {cardList[3].vendor}
          </p>
        ) : activeObj === cardList[4].id ? (
          <p>
            {cardList[4].cardNumber}
            <br />
            {cardList[4].cardHolderName}
            <br />
            {cardList[4].validMonth}

            {cardList[4].validYear}
            <br />
            {cardList[4].cvc}
            <br />
            {cardList[4].vendor}
          </p>
        ) : null}

        {cardList.map((card, i) => {
          return (
            <div key={i}>
              <Card
                cardNumber={card.cardNumber}
                cardHolderName={card.cardHolderName}
                validMonth={card.validMonth}
                validYear={card.validYear}
                cvc={card.cvc}
                vendor={card.vendor}
                id={card.id}
                isActive={card.isActive}
              />
            </div>
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
