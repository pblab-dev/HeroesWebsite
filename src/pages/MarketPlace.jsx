import { HStack } from "native-base";
import styled from "styled-components";

const MediumButton = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  margin: 0;
  ${(props) => props.disabled && "opacity: 0.5;"};
`;

const InfoTags = styled.div`
  font-size: 24px;
  span {
    font-size: 26px;
    font-weight: bold;
  }
`;

function MarketPlace() {
  return (
    <HStack alignItems="center" justifyContent="space-around">
      <HStack px="10" py="5" alignItems="center">
        <MediumButton
          className="pixel-borders pixel-box--primary"
          style={{ marginRight: "50px" }}
        >
          Heroes
        </MediumButton>
        <MediumButton className="pixel-borders pixel-box--primary" disabled>
          Equipment
        </MediumButton>
      </HStack>
      <HStack alignItems="center">
        <InfoTags style={{ marginRight: "10px" }}>
          Floor Price: 2334 <span>BABY</span>
        </InfoTags>
        <InfoTags>
          7234 <span>MILK</span>
        </InfoTags>
      </HStack>
    </HStack>
  );
}

export default MarketPlace;
