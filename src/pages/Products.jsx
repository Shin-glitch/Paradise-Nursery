import { useSelector } from "react-redux";
import PlantCard from "../components/PlantCard";
import plants from "../data/plants";

function Products() {
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category} Plants</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  isInCart={isInCart(plant.id)}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;