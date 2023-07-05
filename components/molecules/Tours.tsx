import React from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import { useQuery, gql } from "@apollo/client";

import { Card } from "../atoms/Card";
import { SwitcherButton } from "../atoms/SwitcherButton";
import { Button } from "../atoms/Button";

import ArrowIcon from "../icons/ArrowIcon";

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledText = styled.span`
  color: #1E1E1E;
  font-size: 32px;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

const StyledContainer = styled.div`
  margin: auto;
  padding: 80px;
`;

const StyledSwitchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ROCKETS_QUERY = gql`
  query GetRockets {
    rockets {
      id
      description
      name
    }
  }
`;

const currentTourState = atom({
  key: "currentTour",
  default: 0,
});

export const Tours = () => {
  const [currentGroup, setCurrentGroup] = useRecoilState(currentTourState);
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const groupedData = [];
  for (let i = 0; i < data.rockets.length; i += 3) {
    groupedData.push(data.rockets.slice(i, i + 3));
  }

  const goToNextGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup < groupedData.length - 1 ? prevGroup + 1 : prevGroup));
  };

  const goToPreviousGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup > 0 ? prevGroup - 1 : prevGroup));
  };

  return (
    <StyledContainer id="tours">
      <StyledHeadingWrapper>
        <StyledText>
          Popular tours
        </StyledText>

        <StyledButtons>
          <Button
            variant="tertiary"
            onClick={ goToPreviousGroup }
            icon={
            <ArrowIcon
              isForSlider
              isLeft
              color="black"
            /> }
          />

          <Button
            variant="tertiary"
            onClick={ goToNextGroup }
            icon={
            <ArrowIcon
              isForSlider
              color="black"
            /> }
          />
        </StyledButtons>
      </StyledHeadingWrapper>

      <StyledCardWrapper>
        {groupedData[currentGroup].map((rocket) => (
          <Card
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </StyledCardWrapper>

      <StyledSwitchBar>
        {groupedData.map((_, index) => (
          <SwitcherButton
          key={index}
          onClick={() => setCurrentGroup(index)}
          isActive={currentGroup === index}
          color="black"
          />
        ))}
      </StyledSwitchBar>
    </StyledContainer>
  )
}
