import React from 'react';

import { Header } from "../molecules/Header";
import { Slider } from "../molecules/Slider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <p>This is Home Page</p>
    </div>
  );
};

export default HomePage;
