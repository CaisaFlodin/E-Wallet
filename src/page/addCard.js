import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { addNewCard } from "../redux/slices/cardSlice";

const AddCard = () => {
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState("");
  const [cardFirstName, setCardFirstName] = useState("");
  const [cardLastName, setCardLastName] = useState("");
  const [validMonth, setVaildMonth] = useState("");
  const [validYear, setVaildYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [vendor, setVendor] = useState("");
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardInfo);

  const createCard = () => {
    let newCard = {
      number: cardNumber,
      firstName: cardFirstName,
      lastName: cardLastName,
      validMonth: validMonth,
      validYear: validYear,
      cvc: cvc,
      vendorName: vendor,
    };
    dispatch(addNewCard(newCard));
    console.log(newCard);
    console.log(cards);

    // let newCard = {
    //   number: cardNumber,
    //   firstName: cardHolderFirst,
    //   lastName: cardHolderLast,
    //   validMonth: validMonth,
    //   validYear: validYear,
    //   cvc: cvc,
    //   vendorName: vendor,
    // };
    // Behöver fixa så att man skickar iväg kortet, och kommer tillbaka till förstasidan.
    // dispatch(createCard(newCard));
    // history.push("/");
  };
  // console.log(cards.cardInfo);

  return (
    <div>
      {/* Kort box där all info skrivs ut */}
      <h1>Add a new card</h1>
      <h5>New card</h5>
      <ul>
        {cards.cardInfo.map((card) => {
          <li>{card.cardFirstName}</li>;
        })}
      </ul>
      <div id="cardBox">
        <p>{cardNumber}</p>
        <p>{cardFirstName}</p>
        <p>{cardLastName}</p>
        <p>{validMonth}</p>
        <p>{validYear}</p>
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
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          placeholder="Firstname"
          onChange={(e) => setCardFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Lastname">Lastname</label>
        <input
          type="text"
          id="Lastname"
          placeholder="Lastname"
          onChange={(e) => setCardLastName(e.target.value)}
        />
      </div>
      {/* box för att skriva in när kortet validitet slutar fungerar */}
      <div>
        <label htmlFor="validMonth">Month</label>
        <input
          type="number"
          id="validMonth"
          placeholder="Month"
          maxLength={2}
          onChange={(e) => setVaildMonth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="validYear">Year</label>
        <input
          type="number"
          id="validYear"
          placeholder="Year"
          maxLength={2}
          onChange={(e) => setVaildYear(e.target.value)}
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
        {/* <Link to="/"> */}
        <button onClick={createCard}> Lägg till kort</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default AddCard;
