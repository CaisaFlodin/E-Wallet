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
            <p className="activeCardNum"> {cardList[0].cardNumber}</p>
            <p className="activeCardNam">{cardList[0].cardHolderName}</p>
            <p className="activeCardMonth"> {cardList[0].validMonth}</p>
            <p className="activeCardYear"> {cardList[0].validYear}</p>
            <p className="activeCardcvc">{cardList[0].cvc}</p>
            {/* <p>{cardList[0].vendor}</p> */}
          </div>
        ) : activeObj === cardList[1].id ? (
          <div>
            <img className="cardImg" src={cardThree} alt="" width="450px" />

            <p className="activeCardNum"> {cardList[1].cardNumber}</p>
            <p className="activeCardNam">{cardList[1].cardHolderName}</p>
            <p className="activeCardMonth"> {cardList[1].validMonth}</p>
            <p className="activeCardYear"> {cardList[1].validYear}</p>
            <p className="activeCardcvc">{cardList[1].cvc}</p>
            {/* <p> {cardList[1].vendor}</p> */}
          </div>
        ) : activeObj === cardList[2].id ? (
          <div>
            <img className="cardImg" src={cardTwo} alt="" width="450px" />
            <p className="activeCardNum"> {cardList[2].cardNumber}</p>
            <p className="activeCardNam">{cardList[2].cardHolderName}</p>
            <p className="activeCardMonth"> {cardList[2].validMonth}</p>
            <p className="activeCardYear"> {cardList[2].validYear}</p>
            <p className="activeCardcvc">{cardList[2].cvc}</p>
            {/* <p>{cardList[2].vendor}</p> */}
          </div>
        ) : activeObj === cardList[3].id ? (
          <div>
            <img className="cardImg" src={cardOne} alt="" width="450px" />
            <p className="activeCardNum"> {cardList[3].cardNumber}</p>
            <p className="activeCardNam">{cardList[3].cardHolderName}</p>
            <p className="activeCardMonth"> {cardList[3].validMonth}</p>
            <p className="activeCardYear"> {cardList[3].validYear}</p>
            <p className="activeCardcvc">{cardList[3].cvc}</p>
            {/* <p>{cardList[3].vendor}</p> */}
          </div>
        ) : null}

        {cardList.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} activeObj={activeObj} />
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
