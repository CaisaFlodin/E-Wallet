import CardInfo from "./CardInfo";
const Card = (props) => {
  return (
    <>
      {props.activeObj !== props.card.id ? (
        <CardInfo
          cardNumber={props.card.cardNumber}
          cardHolderFirst={props.card.cardHolderFirst}
          cardHolderLast={props.card.cardHolderLast}
          validMonth={props.card.validMonth}
          validYear={props.card.validYear}
          cvc={props.card.cvc}
          vendor={props.card.vendor}
          id={props.card.id}
          isActive={props.card.isActive}
          id2={props.card.id2}
        />
      ) : null}
    </>
  );
};

export default Card;
