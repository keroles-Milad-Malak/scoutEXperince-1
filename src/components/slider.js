import { useState } from "react";
import "./styleAll.css";
import image1 from "./image/image-1.jpg";
import image2 from "./image/image-2.jpg";
import image3 from "./image/image-3.png";
import image4 from "./image/image-4.png";
import image5 from "./image/image-5.png";

function Slider() {
  const images = [image1, image2, image3, image4, image5];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    const newIndex = (index + images.length) % images.length;
    setCurrentSlide(newIndex);
  };

  return (
    <>
      <div className="slider-container">
        <button
          className="prev-btn"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
        >
          Previous
        </button>

        <div className="slider">
          <div className="img-id">
            الصورة {currentSlide + 1} من {images.length}
          </div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`عرض ${index + 1}`}
              className={index === currentSlide ? "active" : ""}
            />
          ))}
        </div>

        <button
          className="next-btn"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === images.length - 1}
        >
          Next
        </button>
      </div>

      {/* معرض الصور المصغرة */}
      <div className="gallery-container" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`مصغرة ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
