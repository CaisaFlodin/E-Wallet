const card = (props) => {
      return (
      <div id="container">
          <h4> Here will be the defult card from slice</h4>
        <div className="card">
            <h3>{props.vendor}</h3>
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