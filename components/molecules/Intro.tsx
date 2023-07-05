import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: -83px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 440px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled.p`
  position: absolute;
  color: #FFF;
  font-size: 48px;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 1;
`;

const StyledDiv = styled.div`
  background-color: #000;
  opacity: 0.6399999856948853;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Intro = () => {
  return (
    <StyledContainer>
      <StyledImgWrapper>
        <StyledTitle>
          Favourites
        </StyledTitle>

        <StyledDiv />

        <StyledImg
          src="/images/staticImage.png"
          alt="intro space image"
        />
      </StyledImgWrapper>
    </StyledContainer>
  )
}
