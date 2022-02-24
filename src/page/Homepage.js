import Cards from "../components/Cards";
const Homepage = () => {
  return (
    <>
      <h1>Homepage </h1>
      <h2>Wallet:</h2>
      <Cards />
    </>
    // <div>
    //   <h2>This card is Active</h2>
    //   {cardList.map((card, i) => {
    //     return <Card key={i} {...card} />;
    //   })}
    //   {cardList.length <= 3 ? (
    //     <Link to={"/add/"}>
    //       <button>Add a new card</button>
    //     </Link>
    //   ) : (
    //     <p>
    //       Your wallet have the maximum amount of 4 cards. Remove cards to add a
    //       new one.
    //     </p>
    //   )}
    // </div>
  );
};
export default Homepage;
