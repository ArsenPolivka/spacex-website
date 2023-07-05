import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { currentImageState } from '../../recoil/atoms';

import { SwitcherButton } from "../atoms/SwitcherButton";
import { ArrowButton } from "../atoms/ArrowButton";

const StyledWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  margin-top: -83px;
`;

const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 661px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
`;

const StyledSwitchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -220%);
  margin-left: -23px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 43px;
  max-width: 100%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const StyledArrowButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 58px;
  margin-top: 43px;
  width: 100%;
`;

export const Slider = () => {
  const [currentImage, setCurrentImage] = useRecoilState(currentImageState);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <StyledWrapperDiv id="top">
      <StyledImageDiv>
        <StyledImage
          src={`/images/${currentImage}.png`}
          alt={`Image ${currentImage}`}
        />

        <StyledDivWrapper>
          <div>
            <StyledTextWrapper>
              <StyledImg
                src="/images/text.png"
                alt="main text"
              />
            </StyledTextWrapper>

            <StyledSwitchBar>
              <SwitcherButton
                onClick={() => handleImageChange(0)}
                isActive={currentImage === 0}
              />

              <SwitcherButton
                onClick={() => handleImageChange(1)}
                isActive={currentImage === 1}
              />

              <SwitcherButton
                onClick={() => handleImageChange(2)}
                isActive={currentImage === 2}
              />
            </StyledSwitchBar>
          </div>

          <StyledArrowButtonWrapper>
            <ArrowButton href='#tours' />
          </StyledArrowButtonWrapper>
        </StyledDivWrapper>
      </StyledImageDiv>
    </StyledWrapperDiv>
  );
};
