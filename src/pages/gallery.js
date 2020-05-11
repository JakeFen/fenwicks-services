import React, { Component } from "react";
import PageHeader from "../components/PageHeader/page-header";
import Image1 from "../images/Gallery/IMG_3055.jpeg";
import Image2 from "../images/Gallery/IMG_2972.jpeg";
import Image3 from "../images/Gallery/IMG_3164.jpeg";
import Image4 from "../images/Gallery/house-with-plants.jpeg";
import Image5 from "../images/Gallery/IMG_2964.jpeg";
import Image6 from "../images/Gallery/IMG_3112.jpeg";
import Image7 from "../images/Gallery/yellow-house.jpeg";
import Image8 from "../images/Gallery/IMG_3078.jpeg";
import Image9 from "../images/Gallery/line-of-trees.jpeg";

import GalleryImages from "../components/Gallery/GalleryImages/gallery-images";
import ImageModal from "../components/Gallery/ImageModal/image-modal";

class Gallery extends Component {
  state = {
    images: [
      {
        key: 1,
        url: Image1,
        alt: "Trimmed bushes and cut grass",
      },
      {
        key: 2,
        url: Image2,
        alt: "Cut grass with tall trees",
      },
      {
        key: 3,
        url: Image3,
        alt: "Playground with fresh mulch",
      },
      {
        key: 4,
        url: Image4,
        alt: "House with plants surrounding it",
      },
      {
        key: 5,
        url: Image5,
        alt: "big house with cut grass",
      },
      {
        key: 6,
        url: Image6,
        alt: "Trimmed bushes with fresh mulch",
      },
      {
        key: 7,
        url: Image7,
        alt: "Yellow house with cut grass",
      },
      {
        key: 8,
        url: Image8,
        alt: "Trimmed bushes with fresh mulch",
      },
      {
        key: 9,
        url: Image9,
        alt: "Line of trees with fresh mulch",
      },
    ],
    currentUrl: "",
    currentAlt: "",
  };

  changeImageFilterDark = (e) => {
    e.target.style.filter = "brightness(40%)";
    e.target.nextElementSibling.style.display = "block";
  };

  changeImageFilterDefault = (e) => {
    console.log(e.target.nextSibling.tagName);
    e.target.style.filter = "none";
    if (e.target.nextSibling.tagName === "svg") {
      e.target.nextSibling.style.display = "none";
    }
  };

  toggleModal = (event) => {
    const url = event.target.getAttribute("src");
    const alt = event.target.getAttribute("alt");
    this.setState({ currentUrl: url, currentAlt: alt });
  };

  render() {
    return (
      <main>
        <PageHeader title="Gallery" subtitle="A taste of our best work" />
        <div className="gallery-image-container container">
          <GalleryImages
            changeImageFilterDark={this.changeImageFilterDark}
            changeImageFilterDefault={this.changeImageFilterDefault}
            toggleModal={this.toggleModal}
            openLargeImage={this.openLargeImage}
            images={this.state.images}
          />
          <ImageModal
            currentUrl={this.state.currentUrl}
            currentAlt={this.state.currentAlt}
          />
        </div>
      </main>
    );
  }
}

export default Gallery;
