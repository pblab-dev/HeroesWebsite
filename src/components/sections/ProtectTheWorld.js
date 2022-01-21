import React from "react";
import { Link } from "react-router-dom";
import coin from "../../assets/coin.png";

const Section = () => {
  return (
    <section className="hero-invite">
      <h1 style={{ fontWeight: "bold", fontSize: 77 }} className="neon">
        PROTECT THE WORLD
      </h1>
      <span
        style={{
          fontWeight: "bold",
          fontSize: 22,
        }}
        className="span-desc"
      >
        Recruit, train and prepare your heroes for the biggest battle in the
        metaverse!
      </span>
      <p style={{ marginTop: 100 }}>
        <img src={coin} alt="coin" style={{ width: 55 }} className="coin1" />
        <img src={coin} alt="coin" style={{ width: 55 }} className="coin2" />
        <img src={coin} alt="coin" style={{ width: 55 }} className="coin3" />
        <img src={coin} alt="coin" style={{ width: 55 }} className="coin4" />
        <img src={coin} alt="coin" style={{ width: 99 }} className="coin5" />
      </p>
      <p style={{ marginTop: 100 }}>
        <Link to="play-now" class="pixel-borders pixel-box--primary">
          Play Now!
        </Link>
      </p>
    </section>
  );
};

export default Section;
