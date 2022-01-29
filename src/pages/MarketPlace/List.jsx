import React from "react";
import { HStack, Text } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";

const CardTitle = styled(Text)`
  font-size: 22px;
`;

function List() {
  return (
    <HStack>
      <Card>
        <CardTitle>Item 1</CardTitle>
      </Card>
      <Card>
        <CardTitle>Item 2</CardTitle>
      </Card>
      <Card>
        <CardTitle>Item 3</CardTitle>
      </Card>
    </HStack>
  );
}

export default List;
