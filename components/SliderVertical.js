import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export const SliderVertical = (props) => {
  const [images] = useState(props.images);

  const [sliderRef, slider] = useKeenSlider({
    spacing: 10,
    slidesPerView: 2,
    vertical: true,
  });
  return (
    <>
    {slider && (
        <>
          <ArrowUp onClick={(e) => e.stopPropagation() || slider.prev()} />
         
        </>
      )}
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => {
          return(
          <div key={image.public_id} className="image-additional keen-slider__slide">
            <a href="#">
              <img
                src={image.url}
                alt={image.url}
                width="80"
                height="80"
              />
            </a>
          </div>
          )
        })
        }
      </div>
      
      </div>
      {slider && (
        <>
          <ArrowDown onClick={(e) => e.stopPropagation() || slider.next()} />
        </>
      )}
    </>
  );
};

function ArrowUp(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arr arrow--up" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowDown(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arr arrow--down" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default SliderVertical;
