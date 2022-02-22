import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addNewCard } from "../redux/slices/cardSlice";

const AddCard = () => {
  const dispatch = useDispatch();
 
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderFirst, setCardholderFirst] = useState("");
  const [cardHolderLast, setCardholderLast] = useState("");
  const [validMonth, setVaildMonth] = useState("");
  const [validYear, setVaildYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [vendor, setVendor] = useState("");

  const createCard = () => [{
    // let newCard = {
      
      number: cardNumber,
      firstName: cardHolderFirst,
      lastName: cardHolderLast,
      validMonth: validMonth,
      validYear: validYear,
      cvc: cvc,
      vendorName: vendor,
    // };
    // Behöver fixa så att man skickar iväg kortet, och kommer tillbaka till förstasidan.
    // dispatch(createCard(newCard));
    // history.push("/");
  }];

  return (
    <div>
      {/* Kort box där all info skrivs ut */}
      <h1>Add a new card</h1>
      <div id="cardBox">
        <h5>{vendor}</h5>
        <p>{cardNumber}</p>
        <p>{cardHolderFirst}</p>
        <p>{cardHolderLast}</p>
        <p>{validMonth}</p>
        <p>{validYear}</p>
        <p>{cvc}</p>
        
      </div>

      <div>
        {/* Box för att skriva numerna manuelt */}
        <label htmlFor="numberInput">Card number</label>
        <input
          type="tel"
          maxlength = "16"
          placeholder="Numbers only"
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      {/* Box för att skriva in namnet på ägaren av kortet */}
      <div>
        <label htmlFor="firstnamet">Firstname</label>
        <input
          type="text"
          id="firstnamet"
          placeholder="Firstname"
          onChange={(e) => setCardholderFirst(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Lastname">Lastname</label>
        <input
          type="text"
          id="Lastname"
          placeholder="Lastname"
          onChange={(e) => setCardholderLast(e.target.value)}
        />
      </div>
      {/* box för att skriva in när kortet validitet slutar fungerar */}
      <div>
        <label htmlFor="validMonth">Month</label>
        <input
          type="tel"
          id="validMonth"
          placeholder="Month"
          min="1" max="12"
          maxLength={2}
          onChange={(e) => setVaildMonth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="validYear">Year</label>
        <input
          type="tel"
          id="validYear"
          placeholder="Year"
          min="22"
          maxLength={2}
          onChange={(e) => setVaildYear(e.target.value)}
        />
      </div>

      {/* Box för säkerhets nummerna */}
      <div>
        <label htmlFor="cvc">Security code</label>
        <input
          type="tel"
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
        <Link to="/">
          <button onClick={createCard}> Lägg till kort</button>
        </Link>
      </div>
    </div>
  );
};

export default AddCard;
