import styled from "styled-components";
import Filter from "./Filter";
import List from "./List";
import { breakpoints } from "../../styledHelpers";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Card from "../../components/Card";
import { useQuery } from "react-query";
import { getMarketplaceItens } from "../../web3/web3";
import Loading from "./Loading";

const MediumButton = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  margin: 0;
  ${(props) => props.disabled && "opacity: 0.5;"};
`;

const InfoTags = styled.div`
  font-size: 24px;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }
  span {
    font-size: 26px;
    font-weight: bold;
    color: aquamarine;
    @media (max-width: ${breakpoints.sm}) {
      font-size: 20px;
    }
  }
`;

const RowHeader = styled(Row)`
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;

const FloorPriceColumn = styled(Col)`
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 25px;
  }
`;

const ListCol = styled(Col)`
  margin: 2rem 0 1rem 0;
`;

function FloorPriceTag() {
  return (
    <>
      <Col sm={6} className="d-flex align-items-center">
        <InfoTags style={{ fontSize: "28px" }}>FlOOR PRICE:</InfoTags>
      </Col>
      <Stack>
        <InfoTags>
          <span>MILK</span>
        </InfoTags>
        <InfoTags>7234</InfoTags>
      </Stack>
      <Stack>
        <InfoTags>
          <span>BABY</span>
        </InfoTags>
        <InfoTags>2334</InfoTags>
      </Stack>
    </>
  );
}

function MarketPlace() {
  const { data, error, isLoading } = useQuery("getItems", getMarketplaceItens);
  if (isLoading) return <Loading />;
  if (error) return null;

  console.log(data);

  return (
    <Container>
      <RowHeader>
        <Col className=" d-flex justify-content-start" sm={13} xs={13} md={6}>
          <MediumButton
            className="pixel-borders pixel-box--primary"
            style={{ marginRight: "50px" }}
          >
            Heroes
          </MediumButton>
          <MediumButton className="pixel-borders pixel-box--primary " disabled>
            Equipment
          </MediumButton>
        </Col>
        <FloorPriceColumn
          className="d-flex justify-content-end align-content-center"
          sm={13}
          xs={13}
          md={6}
        >
          <FloorPriceTag />
        </FloorPriceColumn>
      </RowHeader>
      <Row className="gx-4">
        <Col xs={13} sm={13} md={4} lg={4} xl={4}>
          <Card>
            <Filter />
          </Card>
        </Col>

        <ListCol xs={13} sm={13} md={8} lg={8} xl={8}>
          <List data={data.data.nftInfo} />
        </ListCol>
      </Row>
    </Container>
  );
}

export default MarketPlace;
