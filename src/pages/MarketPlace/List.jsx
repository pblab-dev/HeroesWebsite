import React from "react";
import { HStack, Text, Select, CheckIcon, Image } from "native-base";
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

// const Arrow = styled(Box)`
//   transition: width linear 0.4s;
//   width: 40px;
//   height: 40px;
//   &:hover {
//     width: 45px;
//     height: 45px;
//   }
// `;
const listData = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

function List() {
  return (
    <Col
      // w={{ lg: "3/4", md: "100%" }}
      // alignItems={{ lg: "start", md: "center" }}
      // pl={{ md: 10 }}
      // mt={35}
      className="d-flex align-items-start"
    >
      <Row
      // w="100%"
      // pr={10}
      // justifyContent="space-between"
      // alignItems="center"
      >
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
      </Row>

      <Row w="100%" flexWrap="wrap" alignItems={{ md: "center" }}>
        {listData.map((item, index) => (
          <Card
            w={{ sm: "100%", xs: "100%", md: "100%", lg: "1/3" }}
            pl={{ lg: 5, md: 0, sm: 0, xs: 0 }}
            pr={{ lg: 5, xs: 10 }}
            py={5}
            {...(index === 0 && {
              pl: { lg: 0, sm: 0, md: 0, xs: 0 },
              pr: { sm: 10, md: 10, xs: 10 },
            })}
            {...(listData.length - 1 === index && {
              pr: { lg: 10, sm: 10, md: 10 },
              pl: { lg: 10, sm: 0, md: 0 },
            })}
            key={`card-${index}`}
          >
            <CardTitle>{item.name}</CardTitle>
          </Card>
        ))}
      </Row>
      <Row
        alignContent="center"
        justifyContent="center"
        width="100%"
        marginTop={10}
      >
        <Image src={arrowleft} width="40px" height="40px" mr={5} />
        <Image src={arrowright} width="40px" height="40px" />
      </Row>
    </Col>
  );
}

export default List;
