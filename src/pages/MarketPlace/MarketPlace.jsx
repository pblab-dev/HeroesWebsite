import { HStack, VStack } from "native-base";
import styled from "styled-components";
import Filter from "./Filter";
import List from "./List";
import { Container, Row, Col, Stack } from "react-bootstrap";

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
    color: aquamarine;
  }
`;

function MarketPlace() {
  return (
    <Container>
      <Stack direction="horizontal">
        <Col className="d-flex justify-content-start">
          <MediumButton
            className="pixel-borders pixel-box--primary"
            style={{ marginRight: "50px" }}
          >
            Heroes
          </MediumButton>
          <MediumButton className="pixel-borders pixel-box--primary" disabled>
            Equipment
          </MediumButton>
        </Col>

        <Col className="d-flex justify-content-end">
          <InfoTags style={{ marginRight: "10px" }}>
            Floor Price: 2334 <span>BABY</span>
          </InfoTags>
          <InfoTags>
            7234 <span>MILK</span>
          </InfoTags>
        </Col>
      </Stack>
      <Row>
        <Filter />
        <List />
      </Row>
    </Container>
  );
}

export default MarketPlace;
