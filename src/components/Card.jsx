import { useDispatch } from "react-redux";
import { toggleActive, removeCard } from "../redux/slices/cardSlice";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";

const Card = ({
  id,
  cardNumber,
  cardHolderName,
  validMonth,
  validYear,
  cvc,
  vendor,
  isActive
}) => {
  console.log(id, cardHolderName, isActive);

  const dispatch = useDispatch();

  const handleActiveClick = () => {
    dispatch(toggleActive({ id: id, isActive: !isActive }));
  };
  const handleRemoveClick = () => {
    dispatch(removeCard({ id: id }));
  };
  return (
    <div id="container">
      <ul className="card4" onClick={handleActiveClick}>
        <li>
          <input type="checkbox" onChange={handleRemoveClick}></input>
        </li>
        <img
          className="cardImg"
          src={cardFour}
          alt=""
          height="400px"
          width="634px"
        />
        <li className="cardNumber4">{cardNumber}</li>
        <li className="cardHolderName4">{cardHolderName}</li>
        <li className="validMonth4">{validMonth}</li>
        <li className="validYear4">{validYear}</li>
        <li className="cvc4">{cvc}</li>
      </ul>
      <ul className="card3" onClick={handleActiveClick}>
        <li>
          <input type="checkbox" onChange={handleRemoveClick}></input>
        </li>
        <img
          className="cardImg"
          src={cardThree}
          alt=""
          height="400px"
          width="634px"
        />
        <li className="cardNumber3">{cardNumber}</li>
        <li className="cardHolderName3">{cardHolderName}</li>
        <li className="validMonth3">{validMonth}</li>
        <li className="validYear3">{validYear}</li>
        <li className="cvc3">{cvc}</li>
      </ul>
      <ul className="card2" onClick={handleActiveClick}>
        <li>
          <input type="checkbox" onChange={handleRemoveClick}></input>
        </li>
        <img
          className="cardImg"
          src={cardTwo}
          alt=""
          height="400px"
          width="634px"
        />
        <li className="cardNumber2">{cardNumber}</li>
        <li className="cardHolderName2">{cardHolderName}</li>
        <li className="validMonth2">{validMonth}</li>
        <li className="validYear2">{validYear}</li>
        <li className="cvc2">{cvc}</li>
      </ul>
      <ul className="card1" onClick={handleActiveClick}>
        <li>
          <input type="checkbox" onChange={handleRemoveClick}></input>
        </li>
        <img
          className="cardImg"
          src={cardOne}
          alt=""
          height="400px"
          width="634px"
        />
        <li className="cardNumber1">{cardNumber}</li>
        <li className="cardHolderName1">{cardHolderName}</li>
        <li className="validMonth1">{validMonth}</li>
        <li className="validYear1">{validYear}</li>
        <li className="cvc1">{cvc}</li>
      </ul>
    </div>
  );
};

export default Card;
