import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import HomeBanner from "../components/HomeBanner/homebanner";
import GallerySample from "../components/GallerySample/gallerysample";

function Home() {
  return (
    <main>
      <Jumbotron />
      <HomeBanner />
      <GallerySample />
    </main>
  );
}

export default Home;
