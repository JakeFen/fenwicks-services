import React from "react";
import Jumbotron from "../components/Home/Jumbotron/jumbotron";
import HomeBanner from "../components/Home/HomeBanner/homebanner";
import GallerySample from "../components/Home/GallerySample/gallery-sample";
import ContactBanner from "../components/Home/ContactBanner/contact-banner";

function Home() {
  return (
    <main>
      <Jumbotron />
      <HomeBanner />
      <GallerySample />
      <ContactBanner />
    </main>
  );
}

export default Home;
