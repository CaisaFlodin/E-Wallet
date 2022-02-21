import { useDispatch, } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const addCard = () => {
    let dispatch = useDispatch();
    const history = useHistory()

    const [cardNumber, setCardNumber] = useState("")
    const [cardHolderName, setCardholderName] = useState("")
    const [validThru, setVaildThru] = useState("")
    const [ccv, setCcv] = useState("")
    const [vendor, setVendor] = useState("")

    const addCard = () => {
        let newCard = {
            number = cardNumber,
            owner = cardHolderName,
            vaild = validThru,
            ccv = ccv,
            vendorName = vendor,
         };
        // Behöver fixa så att man skickar iväg kortet, och kommer tillbaka till förstasidan.
        dispatch(addCard(newCard));
        history.push("/")
    }


return (
    <div>
        {/* Kort box där all info skrivs ut */}
        <h1>Add a new card</h1>
        <h5>New card</h5>

        <div id="cardBox">
            <p>{cardNumber}</p>
            <p>{cardHolderName}</p>
            <p>{validThru}</p>
            <p>{ccv}</p>
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
            <input type="text" id="textInput" placeholder="First and Lastname" onChange={(e) => setCardholderName(e.target.value)}/>
        </div>
        {/* box för att skriva in när kortet validitet slutar fungerar */}
        <div>
            <label htmlFor="valid">Valid until</label>
            <input type="number" id="valid" placeholder="MM/YY" maxLength={5} onChange={(e) => setVaildThru(e.target.value)}/>
        </div>
        {/* Box för säkerhets nummerna */}
        <div>
            <label htmlFor="ccv">Security code</label>
            <input type="number" id="ccv" placeholder="ex 123" maxLength={3} onChange={(e) => setCcv(e.target.value)}/>
        </div>
        {/* Vendor dom kommer vara fantasi för att göra det lite mer personling för grupp 7 */}
        <div>
          <label htmlFor="vendor">Vendor</label>
          <select
            id="vendor"
            onChange={(e) => setVendor(e.target.value)}
          >
            <option id="oscar" value="oscar">Hederlig Banking</option>
            <option id="asami" value="asami">KANO</option>
            <option id="caisa" value="caisa">Flodinvest</option>
            <option id="andree" value="andree">AK Banking</option>
          </select>
        </div>
        <div>
        <Link to="/">
        <button onClick={addCard}> Lägg till kort.</button>
        </Link>
      </div>
        
    </div>
);

};

export {addCard}