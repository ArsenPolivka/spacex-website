import React from 'react';

import { Header } from "../molecules/Header";
import { Slider } from "../molecules/Slider";
import { Tours } from "../molecules/Tours";


const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Tours />
    </>
  );
};

export default HomePage;
