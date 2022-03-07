import { toggleActive, removeCard } from "../redux/slices/cardSlice";
import { useDispatch } from "react-redux";
import cardFive from "../images/card5.png";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";

const CardInfo = ({
  id,
  cardNumber,
  cardHolderFirst,
  cardHolderLast,
  validMonth,
  validYear,
  cvc,
  vendor,
}) => {
  const dispatch = useDispatch();
  const handleActiveClick = () => {
    dispatch(toggleActive({ id: id, activeObj: id }));
    console.log(id);
  };
  const handleRemoveClick = () => {
    dispatch(removeCard({ id: id }));
  };

  return (
    <div>
      <div className="container" id="container">
        <ul className="card4">
          <div onClick={handleActiveClick}>
            {vendor === "Hederlig Banking" ? (
              <img className="cardImg" src={cardFour} alt="" width="450px" />
            ) : vendor === "KANO" ? (
              <img className="cardImg" src={cardThree} alt="" width="450px" />
            ) : vendor === "FlodInvest" ? (
              <img className="cardImg" src={cardTwo} alt="" width="450px" />
            ) : vendor === "AK Banking" ? (
              <img className="cardImg" src={cardOne} alt="" width="450px" />
            ) : vendor === "blank-bank" ? (
              <img className="cardImg" src={cardFive} alt="" width="450px" />
            ) : null}
          </div>

          <div>
            <li className="cardNumber4">{cardNumber}</li>
            <li
              className="cardHolderName4"
              style={{ textTransform: "uppercase" }}
            >
              {cardHolderFirst} {cardHolderLast}
            </li>
            <li className="validMonth4">{validMonth}</li>
            <li className="validYear4">{validYear}</li>
            <li className="cvc4">{cvc}</li>
          </div>
        </ul>
      </div>
      <button className="Remove-Card-Button" onClick={handleRemoveClick}>
        Remove Card
      </button>
    </div>
  );
};
export default CardInfo;
