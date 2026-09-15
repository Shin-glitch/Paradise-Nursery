import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function PlantCard({ plant, isInCart }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>
      <p>{plant.category}</p>
      <p>₹{plant.price}</p>

      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantCard;