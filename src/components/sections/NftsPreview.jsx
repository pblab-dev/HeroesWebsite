import React from "react";
import { Link } from "react-router-dom";

const NftsPreview = () => {
  return (
    <section className="headerWall bg-ligth-2" id="gameNfts">
      <p>
        <h1 style={{ fontWeight: "bold", color: "white", fontSize: 77 }}>
          Recruit Heroes!
        </h1>
      </p>
      <p>
        <h4 style={{ fontWeight: "bold", color: "white", fontSize: 33 }}>
          infinite heroes available!
        </h4>
      </p>

      <div className="row" style={{ paddingBottom: 200 }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 row" style={{ padding: 0, margin: 0 }}>
          {Array.from(Array(33).keys()).map((e, i) => (
            <div className="col-md-2 col-4 mt-5">
              <img
                src={require(`../../assets/legendary/Hero${i + 1}.png`)}
                width={100}
                height={100}
              />
            </div>
          ))}
          <div
            className="col-md-2 mt-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ color: "white", fontSize: 25 }}>...and more!</span>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </section>
  );
};

export default NftsPreview;
