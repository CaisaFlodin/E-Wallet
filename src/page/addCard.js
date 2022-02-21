import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { addNewCard } from "../redux/slices/cardSlice";

const AddCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardholder] = useState("");
  const [validThru, setVaildThru] = useState("");
  const [cvc, setCvc] = useState("");
  const [vendor, setVendor] = useState("");

  const createCard = () => {
    let newCard = {
      number: cardNumber,
      owner: cardHolder,
      valid: validThru,
      cvc: cvc,
      vendorName: vendor,
    };
    // Behöver fixa så att man skickar iväg kortet, och kommer tillbaka till förstasidan.
    // dispatch(createCard(newCard));
    // history.push("/");
  };

  return (
    <div>
      {/* Kort box där all info skrivs ut */}
      <h1>Add a new card</h1>
      <h5>New card</h5>
      <div id="cardBox">
        <p>{cardNumber}</p>
        <p>{cardHolder}</p>
        <p>{validThru}</p>
        <p>{cvc}</p>
        <p>{vendor}</p>
      </div>
      //
      <div>
        {/* Box för att skriva numerna manuelt */}
        <label htmlFor="numberInput">Card number</label>
        <input
          type="number"
          id="numberInput"
          maxLength={16}
          placeholder="Numbers only"
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      {/* Box för att skriva in namnet på ägaren av kortet */}
      <div>
        <label htmlFor="textInput">Name of Cardholder</label>
        <input
          type="text"
          id="textInput"
          placeholder="First and Lastname"
          onChange={(e) => setCardholder(e.target.value)}
        />
      </div>
      {/* box för att skriva in när kortet validitet slutar fungerar */}
      <div>
        <label htmlFor="valid">Valid until</label>
        <input
          type="number"
          id="valid"
          placeholder="MM/YY"
          maxLength={5}
          onChange={(e) => setVaildThru(e.target.value)}
        />
      </div>
      {/* Box för säkerhets nummerna */}
      <div>
        <label htmlFor="cvc">Security code</label>
        <input
          type="number"
          id="cvc"
          placeholder="ex 123"
          maxLength={3}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      {/* Vendor dom kommer vara fantasi för att göra det lite mer personling för grupp 7 */}
      <div>
        <label htmlFor="vendor">Vendor</label>
        <select id="vendor" onChange={(e) => setVendor(e.target.value)}>
          <option id="oscar" value="oscar">
            Hederlig Banking
          </option>
          <option id="asami" value="asami">
            KANO
          </option>
          <option id="caisa" value="caisa">
            FlodInvest
          </option>
          <option id="andree" value="andree">
            AK Banking
          </option>
        </select>
      </div>
      <div>
        <Link to="/">
          <button onClick={createCard}> Lägg till kort</button>
        </Link>
      </div>
    </div>
  );
};

export default AddCard;
