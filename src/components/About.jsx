function About() {
  return (
    <div className="aboutPage">

      <section className="aboutHero">

        <span className="aboutTag">
          OUR STORY
        </span>

        <h1>
          We Don't Just Sell
          <br />
          Technology.
        </h1>

        <h2 className="gradientText">
          We Create Experiences.
        </h2>

        <p>
          Luxora is a premium technology marketplace built
          for people who appreciate innovation, performance,
          and beautiful design. Every product is carefully
          selected to deliver a world-class experience.
        </p>

      </section>

      <section className="aboutCards">

        <div className="aboutCard">
          <div className="aboutIcon">🚀</div>
          <h2>Innovation</h2>
          <p>
            We bring cutting-edge technology that inspires
            creativity and productivity.
          </p>
        </div>

        <div className="aboutCard">
          <div className="aboutIcon">⭐</div>
          <h2>Quality</h2>
          <p>
            Every product is chosen with a focus on
            premium quality and reliability.
          </p>
        </div>

        <div className="aboutCard">
          <div className="aboutIcon">❤️</div>
          <h2>Customer First</h2>
          <p>
            Shopping should feel effortless, enjoyable,
            and memorable from start to finish.
          </p>
        </div>

      </section>

      <section className="missionSection">

        <div className="missionBox">

          <h1>Our Mission</h1>

          <p>
            To redefine online shopping by combining
            elegant design, modern technology, and
            exceptional customer service into one
            seamless experience.
          </p>

        </div>

      </section>

      <section className="numbersSection">

        <div className="numberCard">
          <h1>50K+</h1>
          <p>Customers</p>
        </div>

        <div className="numberCard">
          <h1>120+</h1>
          <p>Products</p>
        </div>

        <div className="numberCard">
          <h1>4.9★</h1>
          <p>Average Rating</p>
        </div>

        <div className="numberCard">
          <h1>24/7</h1>
          <p>Support</p>
        </div>

      </section>

    </div>
  );
}

export default About;