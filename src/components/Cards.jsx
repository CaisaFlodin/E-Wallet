import Cards from "./Card";
const card = (props) => {
  console.log(props);
  return (
    <div id="container">
      <h4> Here will be the defult card from slice</h4>
      <div className="card">
        {props.cardInfo.length > 4 ? (
          alert("You have already 4 cards")
        ) : (
          <ul>
            {props.cardInfo.map((card) => (
              <Cards {...card} firstName={card.cardFirstName} />
            ))}
          </ul>
        )}
        {/* <h5>{props.vendor}</h5>
        <p>{cardNumber}</p>
        <p>{cardHolderFirst}</p>
        <p>{cardHolderLast}</p>
        <p>{validMonth}</p>
        <p>{validYear}</p>
        <p>{cvc}</p>  */}
      </div>
    </div>
  );
};

export default card;
