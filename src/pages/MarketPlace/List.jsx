import React from "react";
import { Text, Select, CheckIcon, Image } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";
import arrowleft from "../../assets/arrow-left.png";
import arrowright from "../../assets/arrow-right.png";
import { Col, Row } from "react-bootstrap";

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

const listData = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

function List({ data }) {
  return (
    <>
      <Row>
        <Col className="d-flex align-items-center justify-content-between">
          <Quantity>{listData.length} Heroes</Quantity>
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
        {data.map((item, index) => (
          <Col key={`card-${index}`} sm={12} xs={12} md={4} lg={4}>
            <Card>
              <CardTitle>Hero {item.itemId}</CardTitle>
              <Habilities>
                <Hability>Habilidade 1:</Hability>
              </Habilities>
              <Price>$ {item.price}</Price>
            </Card>
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
