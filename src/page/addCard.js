import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import { useState } from "react";

const addCard = () => {
    let dispatch = useDispatch();
    const history = useHistory()

    const [cardNumber, setCardNumber] = useState("")
    const [cardHolderName, SetCardholderName] = useState("")
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
        // Behöver fixa så att man skickar iväg kortet, kolla på det senare.
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
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
            <label htmlFor="textInput">Name of Cardholder</label>
            <input type="text" id="textInput" onChange={(e) => SetCardholderName(e.target.value)}/>
        </div>

        <div>

            <input type="number" id="valid" />
        </div>





    </div>
)
}