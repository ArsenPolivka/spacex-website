import React from "react";

import { Header } from "../molecules/Header";
import { Intro } from "../molecules/Intro";
import { Favorites } from "../molecules/Favorites";

const FavoritesPage = () => {
  return (
    <>
      <Header isFavorites />
      <Intro />
      <Favorites />
    </>
  )
}

export default FavoritesPage;
