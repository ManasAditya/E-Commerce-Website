import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="heroGlow heroGlow1"></div>
        <div className="heroGlow heroGlow2"></div>

        <div className="heroLeft">

          <span className="heroTag">
            ⚡ NEXT GENERATION TECH STORE
          </span>

          <h1>
            Think
            <br />
            Different.
          </h1>

          <p>
            Discover premium smartphones, laptops,
            headphones and accessories with a luxury
            shopping experience.
          </p>

          <div className="heroButtons">
              <button className="primaryButton">
                Explore Collection
              </button>
            <button className="secondaryButton">
              Learn More
            </button>

          </div>

        </div>

        <div className="heroRight">

          <div className="deviceCard">

            <div className="deviceCircle"></div>

            <h2>ShopMe</h2>

            <h4>Future Starts Here</h4>

          </div>

        </div>

      </section>

      <section className="statsSection">

        <div className="statCard">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="statCard">
          <h2>4.9★</h2>
          <p>Average Rating</p>
        </div>

        <div className="statCard">
          <h2>120+</h2>
          <p>Premium Products</p>
        </div>

        <div className="statCard">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

      <section className="categorySection">

        <h1>Explore Categories</h1>

        <div className="categoryGrid">

          <div className="categoryCard">
            <div className="icon">📱</div>
            <h3>Smartphones</h3>
          </div>

          <div className="categoryCard">
            <div className="icon">💻</div>
            <h3>Laptops</h3>
          </div>

          <div className="categoryCard">
            <div className="icon">⌚</div>
            <h3>Wearables</h3>
          </div>

          <div className="categoryCard">
            <div className="icon">🎧</div>
            <h3>Audio</h3>
          </div>

        </div>

      </section>

      <section className="promoSection">

        <h1>
          Premium Technology.
          <br />
          Premium Lifestyle.
        </h1>

        <p>
          Built for creators, professionals and people
          who appreciate beautiful design.
        </p>

          <button className="primaryButton">
            Shop Now
          </button>

      </section>

    </div>
  );
}

export default Home;