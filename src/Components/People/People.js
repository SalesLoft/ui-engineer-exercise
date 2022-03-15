import React from "react";
import styled from "styled-components";

const PeopleBanner = styled.div`
  max-width: 1380px;
  height: 50px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e5e5e5;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  margin-bottom: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, 300px)
    minmax(min-content, 667px)
    minmax(min-content, 372px);
  grid-gap: 10px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-gap: 10px;
`;

const GridItem = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  background: #f9fafb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
`;

const People = () => {
  return (
    <div>
      <PeopleBanner>People</PeopleBanner>
      <GridContainer>
        <GridWrapper>
          <GridItem height="166px"></GridItem>
          <GridItem height="238px"></GridItem>
          <GridItem height="144px"></GridItem>
          <GridItem height="536px"></GridItem>
        </GridWrapper>
        <GridWrapper>
          <GridItem height="1095px"></GridItem>
        </GridWrapper>
        <GridWrapper>
          <GridItem height="226px"></GridItem>
          <GridItem height="428px"></GridItem>
          <GridItem height="194px"></GridItem>
          <GridItem height="213px"></GridItem>
        </GridWrapper>
      </GridContainer>
    </div>
  );
};

export default People;