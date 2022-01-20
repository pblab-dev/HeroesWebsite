import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <BlackBackground>
      <h1>Play Now</h1>
      <Link to="/" class="pixel-borders pixel-box--primary">
        Go Back!
      </Link>
    </BlackBackground>
  );
}

export default PlayNow;
