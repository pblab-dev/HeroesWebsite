import React from "react";
import { Text, Select, CheckIcon, Image } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";
import arrowleft from "../../assets/arrow-left.png";
import arrowright from "../../assets/arrow-right.png";
import { Col, Row } from "react-bootstrap";
import { baseURL } from "./requests";

const CardTitle = styled.h1`
  font-size: 22px;
`;

const Quantity = styled(Text)`
  font-size: 24px;
`;

const Habilities = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 18px;
`;

const Hability = styled.div`
  color: aquamarine;
`;

const Price = styled.div`
  font-size: 24px;
  color: #ffc000;
`;

function NftItem({ item }) {
  return (
    <Card>
      <CardTitle>Hero {item.itemId}</CardTitle>
      <div style={{ width: "100%", height: "120px" }}>
        <iframe
          title="NFT"
          src={`${baseURL}avatar/preview?skin=${
            item.nftInfo.skin === "0" ? "1" : item.nftInfo.skin
          }&hairstyle=${item.nftInfo.hairStyle}&haircolor=${
            item.nftInfo.hairColor
          }&face=${item.nftInfo.face}&facecolor=${
            item.nftInfo.faceColor
          }&helmet=${item.nftInfo.helmet}&cloth=${item.cloth}&armor=${
            item.nftInfo.armor
          }&back=${item.back}&weapon=${item.nftInfo.weapon}&shield=${
            item.nftInfo.shield
          }`}
        />
      </div>

      <Habilities>
        <Hability>Habilidade 1:</Hability>
      </Habilities>
      <Price>$ {item.price}</Price>
    </Card>
  );
}

function List({ nftInfo }) {
  return (
    <>
      <Row>
        <Col className="d-flex align-items-center justify-content-between">
          <Quantity>{nftInfo.length} Heroes</Quantity>
          <Select
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Latest"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Latest" value="ux" />
            <Select.Item label="Price: Low to High" value="web" />
            <Select.Item label="Price: High to Low" value="cross" />
          </Select>
        </Col>
      </Row>

      <Row className="gx-3">
        {nftInfo.map((item, index) => (
          <Col key={`card-${index}`} sm={12} xs={12} md={4} lg={4}>
            <NftItem item={item} />
          </Col>
        ))}
      </Row>
      <Row className="d-flex justify-content-center d-flex">
        <Image src={arrowleft} width="40px" height="40px" mr={5} />
        <Image src={arrowright} width="40px" height="40px" />
      </Row>
    </>
  );
}

export default List;
