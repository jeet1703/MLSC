import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Section from "./Section"; // Ensure Section is correctly imported
import { Gradient } from "./design/Hero";
import "../index.css"; // Ensure this points to where you added the custom CSS
import { images } from "../constants";

const Gall = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="max-w-screen-lg mx-auto text-center md:mt-20 md:mb-20">
        <h2 className="text-4xl md:text-6xl mb-16">GALLERY</h2>
        <div className="gradient-border-wrapper">
          <div className="gradient-border-inner">
            <ImageGallery 
              items={images} 
              showBullets={true}
              showPlayButton={true} 
              showThumbnails={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
}

export default Gall;
