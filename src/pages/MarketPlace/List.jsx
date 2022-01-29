import React from "react";
import { HStack, Text } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";

const CardTitle = styled(Text)`
  font-size: 22px;
`;

const listData = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

function List() {
  return (
    <HStack w="3/4" flexWrap="wrap">
      {listData.map((item, index) => (
        <Card
          w={["3/3", "1/3", "1/3", "1/3"]}
          px={5}
          py={10}
          {...(index === 0 && { pl: 0 })}
          {...(listData.length - 1 === index && { pr: 10 })}
          key={`card-${index}`}
        >
          <CardTitle>{item.name}</CardTitle>
        </Card>
      ))}
    </HStack>
  );
}

export default List;
