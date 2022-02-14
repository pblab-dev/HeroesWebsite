import React from "react";
import { Text, Select, CheckIcon, Image } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";
import arrowleft from "../../assets/arrow-left.png";
import arrowright from "../../assets/arrow-right.png";
import { Col, Row } from "react-bootstrap";

const CardTitle = styled(Text)`
  font-size: 22px;
`;

const Quantity = styled(Text)`
  font-size: 24px;
`;

const listData = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

function List() {
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
        {listData.map((item, index) => (
          <Col sm={12} xs={12} md={4} lg={4}>
            <Card key={`card-${index}`}>
              <CardTitle>{item.name}</CardTitle>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center d-flex">
        <Image src={arrowleft} width="40px" height="40px" mr={5} />
        <Image src={arrowright} width="40px" height="40px" />
      </Row>
    </>
  );
}

export default List;
