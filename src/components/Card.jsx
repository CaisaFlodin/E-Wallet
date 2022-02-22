const Cards = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.cardFirstName} {props.cardLastName}</span>
      <br/>
      <span>{props.cardNumber}</span>
      <br/>
      <span>{props.cvc}</span>
      <br/>
      <span>{props.validMonth}    {props.validYear}</span>
      <br/>
      <span>{props.vendor}</span> 
    </div>
  );
};
export default Cards;
