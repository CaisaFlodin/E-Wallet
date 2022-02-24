import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../redux/slices/cardSlice";
import { useHistory } from "react-router-dom";

const AddCardForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState(0);
  const [cardFirstName, setCardFirstName] = useState("");
  const [cardLastName, setCardLastName] = useState("");
  const [validMonth, setVaildMonth] = useState(0);
  const [validYear, setVaildYear] = useState(0);
  const [cvc, setCvc] = useState(0);
  const [vendor, setVendor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewCard({
        cardNumber: cardNumber,
        cardFirstName: cardFirstName,
        cardLastName: cardLastName,
        validMonth: validMonth,
        validYear: validYear,
        cvc: cvc,
        vendor: vendor,
      })
    );
    history.push("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        {/* Kort box där all info skrivs ut */}
        <h1>Add a new card</h1>
        <h5>New card</h5>

        <div id="cardBox">
          <p>{cardNumber}</p>
          <p>{cardFirstName}</p>
          <p>{cardLastName}</p>
          <p>{validMonth}</p>
          <p>{validYear}</p>
          <p>{cvc}</p>
          <p>{vendor}</p>
        </div>

        <div>
          {/* Box för att skriva numerna manuelt */}
          <label htmlFor="numberInput">Card number</label>
          <input
          type="text"
          id="Cardnumber"
          value={cardNumber}
          maxlength={16}
          pattern="[0-9]*"
          placeholder="Numbers only"
          onChange={(e) =>  setCardNumber((v) => (e.target.validity.valid ? e.target.value : v)) }
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
          type="text"
          id="Month"
          placeholder="1-12"
          value={validMonth}
          maxlength={2}
          pattern="[1-12]*"
          placeholder="Numbers only"
          onChange={(e) =>  setVaildMonth((v) => (e.target.validity.valid ? e.target.value : v)) }
        />
        </div>
        <div>
          <label htmlFor="validYear">Year</label>
          <input
          type="text"
          id="cvc"
          placeholder="Numbers only"
          value={validYear}
          maxlength={2}
          pattern="[0-9]*"
          onChange={(e) =>  setVaildYear((v) => (e.target.validity.valid ? e.target.value : v)) }
        />
        </div>
        {/* Box för säkerhets nummerna */}
        <div>
        <label htmlFor="cvc">Security code</label>
        <input
          type="text"
          id="cvc"
          placeholder="ex 123"
          value={cvc}
          maxlength={3}
          pattern="[0-9]*"
          placeholder="Numbers only"
          onChange={(e) =>  setCvc((v) => (e.target.validity.valid ? e.target.value : v)) }
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
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
export default AddCardForm;
