import React from "react";
import { Link } from "react-router-dom";

import ScrollIcon from "./../../assets/ScrollRollOutlined.png";
import HelmIcon from "./../../assets/Helmet02Outlined.png";
import SwordIcon from "./../../assets/Sword01Outlined.png";

const listInfos = [
  {
    title: "Decentralized",
    desc: `Fully Decentralized, with ownership waiver, paused contract removal, the community is in control!`,
    icon: ScrollIcon,
  },
  {
    title: "ERC721",
    desc: `NFT's Fully compatible with the ERC721 standard, being possible to be implemented in other NFT's marketplaces.`,
    icon: HelmIcon,
  },
  {
    title: "NFT'S",
    desc: `There are thousands of possibilities for nfts, from common heroes to warrior heroes with unique mounts and attributes.`,
    icon: SwordIcon,
  },
];

const GamePreview = () => {
  return (
    <section
      className="headerWall bg-dark"
      style={{ marginTop: 300 }}
      id="gameInfo"
    >
      <p>
        <h1 style={{ fontWeight: "bold", color: "white", fontSize: 77 }}>
          HEROES BATTLES
        </h1>
      </p>
      <p>
        <h4 style={{ fontWeight: "bold", color: "white", fontSize: 33 }}>
          Conquer the Glory!
        </h4>
      </p>

      <div className="row" style={{ paddingBottom: 50 }}>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {listInfos.map((e, i) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                maxWidth: "70%",
              }}
            >
              <img src={e.icon} width={50} height={50} />
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: 20,
                }}
              >
                <span
                  style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
                >
                  {e.title}
                </span>
                <span style={{ color: "white", fontWeight: "100" }}>
                  {e.desc}
                </span>
              </div>
            </div>
          ))}
          <Link
            to="play-now"
            style={{ color: "white", fontSize: 33, marginTop: 20 }}
          >
            Learn more
          </Link>
        </div>
        <div className="col-md-6">
          <div class="videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TejEGscxOks"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePreview;
