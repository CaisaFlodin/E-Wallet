import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../redux/slices/cardSlice";
import { useHistory } from "react-router-dom";
import cardFour from "../images/card4.png";

const AddCardForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [validMonth, setVaildMonth] = useState("");
  const [validYear, setVaildYear] = useState("");
  const [cvc, setCvc] = useState();
  const [vendor, setVendor] = useState("");

  const formatAndSetcardNumber = e => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
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
        vendor: vendor
      })
    );
    history.push("/");
  };
  return (
    <form onSubmit={onSubmit}>
      {/* Kort box där all info skrivs ut */}
      <h1>Add a new card</h1>
      <h5>New card</h5>

      <div id="cardBox">
        <img
          className="cardImg"
          src={cardFour}
          alt=""
          height="400px"
          width="634px"
        />
        <p className="addcardNumber">{cardNumber}</p>
        <p className="addcardHolderName">{cardHolderName}</p>
        <p className="addValidMonth">{validMonth}</p>
        <p className="addvalidYear">{validYear}</p>
        <p className="addcvc">{cvc}</p>
      </div>

      <div className="addInputs">
        <div>
          {/* Box för att skriva numerna manuelt */}
          <label htmlFor="numberInput">Card number</label>
      <input type="text" value={cardNumber} onChange={formatAndSetcardNumber} />
          {/* 
          <input
            type="text"
            id="Cardnumber"
            value={cardNumber}
            maxLength={16}
            pattern="[0-9]*"
            placeholder="Numbers only"
            onChange={(e) =>
              setCardNumber((v) =>
                e.target.validity.valid ? e.target.value : v
              )
            }
          /> */}
        </div>

        {/* Box för att skriva in namnet på ägaren av kortet */}

        <div>
          <label htmlFor="cardholdername">Card Holder Name</label>
          <input
            type="text"
            id="cardholdername"
            placeholder="Name"
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>

        {/* box för att skriva in när kortet validitet slutar fungerar */}

        <div>
          <label htmlFor="validMonth">Month</label>
          <select
            id="validMonth"
            onChange={(e) => setVaildMonth(e.target.value)}
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

        <div>
          <label htmlFor="validYear">Year</label>
          <select id="validYear" onChange={(e) => setVaildYear(e.target.value)}>
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

        {/* Box för säkerhets nummerna */}

        <div>
          <label htmlFor="cvc">Security code</label>
          <input
            type="text"
            id="cvc"
            placeholder="ex 123"
            value={cvc}
            maxLength={3}
            pattern="[0-9]*"
            placeholder="Numbers only"
            onChange={(e) =>
              setCvc((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
        </div>
        {/* Vendor dom kommer vara fantasi för att göra det lite mer personling för grupp 7 */}
        <div>
          <label htmlFor="vendor">Vendor</label>
          <select id="vendor" onChange={(e) => setVendor(e.target.value)}>
            <option style={{ display: "none" }}></option>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
export default AddCardForm;
