import React from 'react';
import styled from "styled-components";

import { Header } from "../molecules/Header";
import { Slider } from "../molecules/Slider";

const StyledWrapper = styled.div`
  
`;

const StyledSlider = styled(Slider)`
  position: absolute;
`;

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
    </div>
  );
};

export default HomePage;
