import React from "react";
import { VStack, Slider, Checkbox, HStack } from "native-base";
import styled from "styled-components";
import Card from "../../components/Card";

const FilterTitle = styled.div`
  font-size: 22px;
`;

function Filter() {
  const [groupValue, setGroupValue] = React.useState([
    "Photography",
    "Gardening",
  ]);
  return (
    <Card p={10} w={{ lg: "1/4", md: "100%" }}>
      <VStack space={2} alignItems="start">
        <FilterTitle style={{ fontSize: "28px" }}>Filters</FilterTitle>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          accessibilityLabel="pick an item"
          onChange={(values) => {
            setGroupValue(values || []);
          }}
          mb={5}
        >
          <Checkbox value="Photography" my="1">
            Ordinary
          </Checkbox>
          <Checkbox value="Writing" my="1">
            Rare
          </Checkbox>
          <Checkbox value="Gardening" my="1">
            Lendary
          </Checkbox>
        </Checkbox.Group>
        <FilterTitle>Level</FilterTitle>
        <Slider defaultValue={40} colorScheme="yellow">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FilterTitle>Strenght</FilterTitle>
        <Slider defaultValue={20} colorScheme="yellow">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FilterTitle>Dexterity</FilterTitle>
        <Slider defaultValue={70} colorScheme="yellow">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FilterTitle>Vigor</FilterTitle>
        <Slider defaultValue={70} colorScheme="yellow">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>
    </Card>
  );
}

export default Filter;
