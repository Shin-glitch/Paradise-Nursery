import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Paradise Nursery</h1>

        <h2>Welcome to Paradise Nursery</h2>

        <p>
          Bring nature into your home with our beautiful collection
          of indoor, flowering, medicinal, and succulent plants.
        </p>

        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;