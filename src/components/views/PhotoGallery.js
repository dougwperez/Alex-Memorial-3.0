import React from "react";
import { FaTimes } from "react-icons/fa";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import test1 from "../../images/photo-gallery/0.jpg";

const PhotoGallery = ({ goHome }) => {
  console.log("ABOUT");
  return (
    <div className="modalNoScroll">
      <button className="back-btn" onClick={() => goHome()}>
        <FaTimes />
      </button>
      <iframe
        className="photo-gallery-iframe"
        width="100%"
        height="1000px"
        src="https://dougwperez.github.io/photo-gallery-iframe/"
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default PhotoGallery;
