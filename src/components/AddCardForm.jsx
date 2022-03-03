import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCard } from "../redux/slices/cardSlice";
import { useHistory } from "react-router-dom";
import cardFive from "../images/card5.png";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";
import cardBackOne from "../images/card1back.png";
import cardBackTwo from "../images/card2back.png";
import cardBackThree from "../images/card3back.png";
import cardBackFour from "../images/card4back.png";
import cardBackFive from "../images/card5back.png";

const AddCardForm = () => {
  const { api } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log(api);
  });
  const [cardNumber, setCardNumber] = useState("");
  // const [cardHolderName, setCardHolderName] = useState("");
  const [validMonth, setVaildMonth] = useState("");
  const [validYear, setVaildYear] = useState("");
  const [cvc, setCvc] = useState();
  const [vendor, setVendor] = useState("");
  const fName = api.results[0].name.first;
  const lName = api.results[0].name.last;
  const cardHolderName = fName + " " + lName;
  const formatAndSetcardNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
    if (inputNumbersOnly.length === 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
    const splits = inputNumbersOnly.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    setCardNumber(spacedNumber);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewCard({
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        validMonth: validMonth,
        validYear: validYear,
        cvc: cvc,
        vendor: vendor,
      })
    );
    history.push("/wallet");
    console.log(vendor);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* Kort box där all info skrivs ut */}
      <h1>Add a new card</h1>
      <h5>New card</h5>
      {/* const select =  */}
      <div className="container-card" id="cardBox">
        <div className="card-container">
          <div className="card">
            <section className="front">
              {vendor === "Hederlig Banking" ? (
                <img className="cardImg" src={cardFour} alt="" width="450px" />
              ) : vendor === "KANO" ? (
                <img className="cardImg" src={cardThree} alt="" width="450px" />
              ) : vendor === "FlodInvest" ? (
                <img className="cardImg" src={cardTwo} alt="" width="450px" />
              ) : vendor === "AK Banking" ? (
                <img className="cardImg" src={cardOne} alt="" width="450px" />
              ) : (
                <img className="cardImg" src={cardFive} alt="" width="450px" />
              )}
              <p className="addcardNumber">{cardNumber}</p>
              <p
                className="addcardHolderName"
                style={{ textTransform: "uppercase" }}
              >
                {cardHolderName}
              </p>
              <p className="addValidMonth">{validMonth}</p>
              <p className="addvalidYear">{validYear}</p>
            </section>
            <section className="back">
              {vendor === "Hederlig Banking" ? (
                <img
                  className="cardImg"
                  src={cardBackFour}
                  alt=""
                  width="450px"
                />
              ) : vendor === "KANO" ? (
                <img
                  className="cardImg"
                  src={cardBackThree}
                  alt=""
                  width="450px"
                />
              ) : vendor === "FlodInvest" ? (
                <img
                  className="cardImg"
                  src={cardBackTwo}
                  alt=""
                  width="450px"
                />
              ) : vendor === "AK Banking" ? (
                <img
                  className="cardImg"
                  src={cardBackOne}
                  alt=""
                  width="450px"
                />
              ) : (
                <img
                  className="cardImg"
                  src={cardBackFive}
                  alt=""
                  width="450px"
                />
              )}
              <p className="addcvc">{cvc}</p>
            </section>
          </div>
        </div>
      </div>

      <div className="addInputs">
        <div className="addnumberImput">
          {/* Box för att skriva numerna manuelt */}
          <label className="card-label1" htmlFor="numberInput">
            Card number
          </label>
          <input
            className="card-input1"
            type="text"
            value={cardNumber}
            onChange={formatAndSetcardNumber}
            maxLength={19}
            minLength={19}
            required
          />
        </div>

        {/* Box för att skriva in namnet på ägaren av kortet */}

        <div className="addnameInput">
          <label className="card-label2" htmlFor="cardholdername">
            Card Holder
          </label>
          <input
            className="card-input2"
            required
            type="text"
            id="cardholdername"
            disabled
            value={cardHolderName}
            placeholder={cardHolderName}
          />
        </div>

        {/* box för att skriva in när kortet validitet slutar fungerar */}

        <div className="addDateAndCvc">
          <div className="expirationDate">
            <div className="expirationMonth">
              <label className="card-label3" htmlFor="validMonth">
                Expiration Date
              </label>
              <select
                className="card-select1"
                id="validMonth"
                onChange={(e) => setVaildMonth(e.target.value + " /")}
                required
              >
                <option value="" defaultChecked="true">
                  Month
                </option>
                <option id="01" value="01">
                  Jan
                </option>
                <option id="02" value="02">
                  Feb
                </option>
                <option id="03" value="03">
                  Mar
                </option>
                <option id="04" value="04">
                  Apr
                </option>
                <option id="05" value="05">
                  May
                </option>
                <option id="06" value="06">
                  Jun
                </option>
                <option id="07" value="07">
                  Jul
                </option>
                <option id="08" value="08">
                  Aug
                </option>
                <option id="09" value="09">
                  Sep
                </option>
                <option id="10" value="10">
                  Oct
                </option>
                <option id="11" value="11">
                  Nov
                </option>
                <option id="12" value="12">
                  Dec
                </option>
              </select>
            </div>
            <div className="expirationYear">
              <label className="card-label4" htmlFor="validYear"></label>
              <select
                className="card-select2"
                id="validYear"
                onChange={(e) => setVaildYear(e.target.value)}
                required
              >
                <option value="" defaultChecked="true">
                  Year
                </option>
                <option id="01" value="22">
                  2022
                </option>
                <option id="02" value="23">
                  2023
                </option>
                <option id="03" value="24">
                  2024
                </option>
                <option id="04" value="25">
                  2025
                </option>
                <option id="05" value="26">
                  2026
                </option>
                <option id="06" value="27">
                  2027
                </option>
              </select>
            </div>
          </div>

          {/* Box för säkerhets nummerna */}
          <div className="addCvc">
            <label className="card-label5" htmlFor="cvc">
              CVC
            </label>
            <input
              className="card-input5"
              type="text"
              id="cvc"
              value={cvc}
              maxLength={3}
              pattern="[0-9]*"
              onChange={(e) =>
                setCvc((v) => (e.target.validity.valid ? e.target.value : v))
              }
            />
          </div>
        </div>
        {/* Vendor dom kommer vara fantasi för att göra det lite mer personling för grupp 7 */}
        <div className="addvendor">
          <label className="card-label6" htmlFor="vendor">
            Vendor
          </label>
          <select
            className="card-select3"
            value={vendor}
            id="vendor"
            onChange={(e) => setVendor(e.target.value)}
            required
          >
            <option
              id="blank-card"
              value="blank-bank"
              style={{ display: "none" }}
            ></option>
            <option id="oscar" value="Hederlig Banking">
              Hederlig Banking
            </option>
            <option id="asami" value="KANO">
              KANO
            </option>
            <option id="caisa" value="FlodInvest">
              FlodInvest
            </option>
            <option id="andree" value="AK Banking">
              AK Banking
            </option>
          </select>
        </div>
        <div className="addbutton">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddCardForm;
