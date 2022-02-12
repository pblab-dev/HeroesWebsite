import React from "react";
import { Slider, Checkbox } from "native-base";
import styled from "styled-components";
import { Stack } from "react-bootstrap";
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
    <Card xs={13} sm={13} md={4} lg={4} xl={4} className="">
      <Stack>
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
      </Stack>
    </Card>
  );
}

export default Filter;
