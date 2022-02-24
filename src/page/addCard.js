import AddCardForm from "../components/AddCardForm";

const AddCard = () => {
  return <AddCardForm />;
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const [number, setNumber] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [validMonth, setVaildMonth] = useState("");
  // const [validYear, setVaildYear] = useState("");
  // const [cardCvc, setCardCvc] = useState("");
  // const [cardVendor, setCardVendor] = useState("");

  // const createCard = () => {
  //   let newCard = {
  //     cardNumber: number,
  //     cardFirstName: firstName,
  //     cardLastName: lastName,
  //     validMonth: validMonth,
  //     validYear: validYear,
  //     cvc: cardCvc,
  //     vendor: cardVendor,
  //   };
  //   dispatch(addNewCard(newCard));
  //   history.push("/");
  //   console.log(newCard);
  // };
  // // console.log(cards.cardInfo);

  // return (
  //   <div>
  //     {/* Kort box där all info skrivs ut */}
  //     <h1>Add a new card</h1>
  //     <h5>New card</h5>

  //     <div id="cardBox">
  //       <p>{number}</p>
  //       <p>{firstName}</p>
  //       <p>{lastName}</p>
  //       <p>{validMonth}</p>
  //       <p>{validYear}</p>
  //       <p>{cardCvc}</p>
  //       <p>{cardVendor}</p>
  //     </div>

  //     <div>
  //       {/* Box för att skriva numerna manuelt */}
  //       <label htmlFor="numberInput">Card number</label>
  //       <input
  //         type="tel"
  //         id="numberInput"
  //         maxLength={16}
  //         placeholder="Numbers only"
  //         onChange={(e) => setNumber(e.target.value)}
  //       />
  //     </div>
  //     {/* Box för att skriva in namnet på ägaren av kortet */}
  //     <div>
  //       <label htmlFor="firstname">Firstname</label>
  //       <input
  //         type="text"
  //         id="firstname"
  //         placeholder="Firstname"
  //         onChange={(e) => setFirstName(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="Lastname">Lastname</label>
  //       <input
  //         type="text"
  //         id="Lastname"
  //         placeholder="Lastname"
  //         onChange={(e) => setLastName(e.target.value)}
  //       />
  //     </div>
  //     {/* box för att skriva in när kortet validitet slutar fungerar */}
  //     <div>
  //       <label htmlFor="validMonth">Month</label>
  //       <input
  //         type="tel"
  //         id="validMonth"
  //         placeholder="Month"
  //         maxLength={2}
  //         onChange={(e) => setVaildMonth(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="validYear">Year</label>
  //       <input
  //         type="tel"
  //         id="validYear"
  //         placeholder="Year"
  //         maxLength={2}
  //         onChange={(e) => setVaildYear(e.target.value)}
  //       />
  //     </div>
  //     {/* Box för säkerhets nummerna */}
  //     <div>
  //       <label htmlFor="cvc">Security code</label>
  //       <input
  //         type="tel"
  //         id="cvc"
  //         placeholder="ex 123"
  //         maxLength={3}
  //         onChange={(e) => setCardCvc(e.target.value)}
  //       />
  //     </div>
  //     {/* Vendor dom kommer vara fantasi för att göra det lite mer personling för grupp 7 */}
  //     <div>
  //       <label htmlFor="vendor">Vendor</label>
  //       <select id="vendor" onChange={(e) => setCardVendor(e.target.value)}>
  //         <option id="oscar" value="Hederlig Banking">
  //           Hederlig Banking
  //         </option>
  //         <option id="asami" value="KANO">
  //           KANO
  //         </option>
  //         <option id="caisa" value="FlodInvest">
  //           FlodInvest
  //         </option>
  //         <option id="andree" value="AK Banking">
  //           AK Banking
  //         </option>
  //       </select>
  //     </div>
  //     <div>
  //       {/* <Link to="/"> */}
  //       <button onClick={createCard}> Lägg till kort</button>
  //       {/* </Link> */}
  //     </div>
  //   </div>
  // );
};

export default AddCard;
