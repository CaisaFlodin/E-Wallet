import { useDispatch } from "react-redux";
import { toggleActive, removeCard } from "../redux/slices/cardSlice";

const Card = ({
  id,
  cardFirstName,
  cardLastName,
  validMonth,
  validYear,
  cvc,
  vendor,
  isActive,
}) => {
  console.log(id, cardFirstName, isActive);

  const dispatch = useDispatch();

  const handleActiveClick = () => {
    dispatch(toggleActive({ id: id, isActive: !isActive }));
  };
  const handleRemoveClick = () => {
    dispatch(removeCard({ id: id }));
  };
  return (
    <div id="container">
      <ul className="card" onClick={handleActiveClick}>
        <li>
          <input type="checkbox" onChange={handleRemoveClick}></input>
        </li>
        <li>{cardFirstName}</li>
        <li>{cardLastName}</li>
        <li>{validMonth}</li>
        <li>{validYear}</li>
        <li>{cvc}</li>
        <li>{vendor}</li>
      </ul>
    </div>
  );
};

export default Card;
