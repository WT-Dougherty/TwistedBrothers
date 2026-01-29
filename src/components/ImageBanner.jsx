import "./ImageBanner.css";

function ImageBanner({ path }) {
  return (
    <div className="banner-container">
      <div className="banner-content-wrapper">
        <div className="banner">
          <img
            src={path + "/image1.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image2.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image3.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image4.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image5.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image6.jpeg"}
            alt="banner image"
            className="banner-image"
          />
        </div>
        <div className="banner">
          <img
            src={path + "/image1.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image2.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image3.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image4.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image5.jpeg"}
            alt="banner image"
            className="banner-image"
          />
          <img
            src={path + "/image6.jpeg"}
            alt="banner image"
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
