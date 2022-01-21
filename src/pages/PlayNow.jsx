import styled from "styled-components";
import { Link } from "react-router-dom";
import { connectWallet } from "../web3";
import { useEffect } from "react";

const BlackBackground = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  h1 {
    color: white;
    margin-bottom: 20px;
  }
`;

function PlayNow() {
  useEffect(async () => {
    const walletConnected = await connectWallet();
    console.log(walletConnected);
  }, []);

  return (
    <BlackBackground>
      <iframe src="https://wcheroes.io/game" height={900} width={"100%"} />
      {/* <h1>Play Now</h1>
      <Link to="/" class="pixel-borders pixel-box--primary">
        Go Back!
      </Link> */}
    </BlackBackground>
  );
}

export default PlayNow;
