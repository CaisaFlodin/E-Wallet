import { toggleActive } from "../redux/slices/cardSlice";
import { useDispatch } from "react-redux";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";
const CardInfo = ({
  id,
  cardNumber,
  cardHolderName,
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
  console.log(cardNumber);
  return (
    <div id="container">
      {/* <li>
          <input
            value="Remove Card"
            type="button"
            onClick={handleRemoveClick}
          ></input>
        </li> */}
      <ul className="card4" onClick={handleActiveClick}>
        {vendor === "Hederlig Banking" ? (
          <img className="cardImg" src={cardFour} alt="" width="450px" />
        ) : vendor === "KANO" ? (
          <img className="cardImg" src={cardThree} alt="" width="450px" />
        ) : vendor === "FlodInvest" ? (
          <img className="cardImg" src={cardTwo} alt="" width="450px" />
        ) : vendor === "AK Banking" ? (
          <img className="cardImg" src={cardOne} alt="" width="450px" />
        ) : null}

        <li className="cardNumber4">{cardNumber}</li>
        <li className="cardHolderName4">{cardHolderName}</li>
        <li className="validMonth4">{validMonth}</li>
        <li className="validYear4">{validYear}</li>
        <li className="cvc4">{cvc}</li>
      </ul>
      {/* <ul className="card3" onClick={handleActiveClick}> */}
      {/* <li>
          <input
            value="Remove Card"
            type="button"
            onClick={handleRemoveClick}
          ></input>
        </li> */}
      {/* <img className="cardImg" src={cardThree} alt="" width="450px" />
        <li className="cardNumber3">{cardNumber}</li>
        <li className="cardHolderName3">{cardHolderName}</li>
        <li className="validMonth3">{validMonth}</li>
        <li className="validYear3">{validYear}</li>
        <li className="cvc3">{cvc}</li>
      </ul> */}

      {/* <li>
    //       <input
    //         value="Remove Card"
    //         type="button"
    //         onclick={handleRemoveClick}
    //       ></input>
    //     </li> */}
      {/* <ul className="card2" onClick={handleActiveClick}> */}
      {/* <img className="cardImg" src={cardTwo} alt="" width="450px" />
        <li className="cardNumber2">{cardNumber}</li>
        <li className="cardHolderName2">{cardHolderName}</li>
        <li className="validMonth2">{validMonth}</li>
        <li className="validYear2">{validYear}</li>
        <li className="cvc2">{cvc}</li>
      </ul> */}
      {/* <li>
    //       <input
    //         value="Remove Card"
    //         type="button"
    //         onclick={handleRemoveClick}
    //       ></input>
    //     </li> */}
      {/* <ul className="card1" onClick={handleActiveClick}> */}
      {/* <img className="cardImg" src={cardOne} alt="" width="450px" />
        <li className="cardNumber1">{cardNumber}</li>
        <li className="cardHolderName1">{cardHolderName}</li>
        <li className="validMonth1">{validMonth}</li>
        <li className="validYear1">{validYear}</li>
        <li className="cvc1">{cvc}</li>
      </ul> */}
    </div>
    // </div>
  );
};
export default CardInfo;
