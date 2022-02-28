import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";

const Cards = () => {
  const { cardList, activeObj } = useSelector((state) => state.cards);

  console.log(cardList);
  return (
    <>
      <div>
        <h2>This card is Active</h2>
        {activeObj === cardList[0].id ? (
          <div className="card4">
            <img className="cardImg" src={cardFour} alt="" width="450px" />
            <p className="cardNumber4"> {cardList[0].cardNumber}</p>
            <p className="cardHolderName4">{cardList[0].cardHolderName}</p>
            <p className="validMonth4"> {cardList[0].validMonth}</p>
            <p className="validYear4"> {cardList[0].validYear}</p>
            <p className="cvc4">{cardList[0].cvc}</p>
            <p>{cardList[0].vendor}</p>
          </div>
        ) : activeObj === cardList[1].id ? (
          <div>
            <img className="cardImg" src={cardThree} alt="" width="450px" />

            <p className="cardNumber3"> {cardList[1].cardNumber}</p>
            <p className="cardHolderName3">{cardList[1].cardHolderName}</p>
            <p className="validMonth3"> {cardList[1].validMonth}</p>
            <p className="validYear3"> {cardList[1].validYear}</p>
            <p className="cvc3">{cardList[1].cvc}</p>
            <p> {cardList[1].vendor}</p>
          </div>
        ) : activeObj === cardList[2].id ? (
          <div>
            <img className="cardImg" src={cardTwo} alt="" width="450px" />
            <p className="cardNumber2"> {cardList[2].cardNumber}</p>
            <p className="cardHolderName2">{cardList[2].cardHolderName}</p>
            <p className="validMonth2"> {cardList[2].validMonth}</p>
            <p className="validYear2"> {cardList[2].validYear}</p>
            <p className="cvc2">{cardList[2].cvc}</p>
            <p>{cardList[2].vendor}</p>
          </div>
        ) : activeObj === cardList[3].id ? (
          <div>
            <img className="cardImg" src={cardOne} alt="" width="450px" />
            <p className="cardNumber1"> {cardList[3].cardNumber}</p>
            <p className="cardHolderName1">{cardList[3].cardHolderName}</p>
            <p className="validMonth1"> {cardList[3].validMonth}</p>
            <p className="validYear1"> {cardList[3].validYear}</p>
            <p className="cvc1">{cardList[3].cvc}</p>
            <p>{cardList[3].vendor}</p>
          </div>
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
