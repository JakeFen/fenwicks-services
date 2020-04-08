import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import HomeBanner from "../components/HomeBanner/Homebanner";
import GallerySample from "../components/GallerySample/GallerySample";

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
