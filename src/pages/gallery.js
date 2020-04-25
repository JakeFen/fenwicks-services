import React, { Component } from "react";
import PageHeader from "../components/PageHeader/page-header";
import Image1 from "../images/Gallery/IMG_3055.jpeg";
import Image2 from "../images/Gallery/IMG_2972.jpeg";
import Image3 from "../images/Gallery/IMG_3164.jpeg";
import Image4 from "../images/Gallery/IMG_2979.jpeg";
import Image5 from "../images/Gallery/IMG_2964.jpeg";
import Image6 from "../images/Gallery/IMG_3112.jpeg";
import Image7 from "../images/Gallery/IMG_1048.jpeg";
import Image8 from "../images/Gallery/IMG_3078.jpeg";
import Image9 from "../images/Gallery/IMG_1052.jpeg";

import GalleryImages from "../components/GalleryImages/gallery-images";

class Gallery extends Component {
  state = {
    images: [
      {
        url: Image1,
        alt: "Something",
      },
      {
        url: Image2,
        alt: "Something",
      },
      {
        url: Image3,
        alt: "Something",
      },
      {
        url: Image4,
        alt: "Something",
      },
      {
        url: Image5,
        alt: "Something",
      },
      {
        url: Image6,
        alt: "Something",
      },
      {
        url: Image7,
        alt: "Something",
      },
      {
        url: Image8,
        alt: "Something",
      },
      {
        url: Image9,
        alt: "Something",
      },
    ],
  };

  render() {
    return (
      <main>
        <PageHeader title="Gallery" subtitle="A taste of our best work" />
        <div className="gallery-image-container container">
          <GalleryImages
            images = {this.state.images}
          />
        </div>
      </main>
    );
  }
}

export default Gallery;
