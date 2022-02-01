import React from "react";
import { HStack, Text, VStack, Select, CheckIcon } from "native-base";
import styled from "styled-components/native";
import Card from "../../components/Card";

const CardTitle = styled(Text)`
  font-size: 22px;
`;

const Quantity = styled(Text)`
  font-size: 24px;
`;

const listData = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

function List() {
  return (
    <VStack w="3/4" alignItems="start" mt={35}>
      <HStack w="100%" pr={10} justifyContent="space-between">
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
      </HStack>

      <HStack w="100%" flexWrap="wrap">
        {listData.map((item, index) => (
          <Card
            w={["3/3", "1/3", "1/3", "1/3"]}
            px={5}
            py={5}
            {...(index === 0 && { pl: 0 })}
            {...(listData.length - 1 === index && { pr: 10 })}
            key={`card-${index}`}
          >
            <CardTitle>{item.name}</CardTitle>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
}

export default List;
