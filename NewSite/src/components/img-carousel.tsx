import { useState } from "react";

const FRAME_ASPECT = "205 / 256";
const LANDSCAPE_IMAGES = new Set(["bl-6.jpg"]);

const imagePaths = [
  "bl-1.jpg",
  "bl-2.jpg",
  "bl-3.jpg",
  "bl-4.jpg",
  "bl-5.jpg",
  "bl-6.jpg",
  "bl-7.jpg",
  "church-1.jpg",
  "church-2.jpg",
];

export default function ImgCarousel() {
  const [imageNumber, setImageNumber] = useState(0);
  const currentImage = imagePaths[imageNumber];
  const isLandscape = LANDSCAPE_IMAGES.has(currentImage);

  const changeImage = (increment: number) => {
    setImageNumber(
      (prev) => (prev + increment + imagePaths.length) % imagePaths.length,
    );
  };

  return (
    <div className="relative z-1 mx-auto w-full max-w-xs shrink-0 self-center rounded-xs border border-white sm:max-w-sm lg:mx-0 lg:max-w-md">
      <div
        className="relative mx-auto w-full max-w-[85vw] overflow-hidden bg-black sm:max-w-none"
        style={{ aspectRatio: FRAME_ASPECT }}
      >
        <button
          type="button"
          className="absolute top-1/2 left-1 z-10 -translate-y-1/2 p-1 hover:scale-105 hover:cursor-pointer sm:left-2"
          onClick={() => changeImage(-1)}
          aria-label="Previous image"
        >
          <svg
            className="h-10 w-8 sm:h-[60px] sm:w-[50px]"
            viewBox="0 0 50 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <polyline
              points="38,4 12,30 38,56"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <img
          key={currentImage}
          id="carousel-image"
          className={`absolute inset-0 size-full ${isLandscape ? "object-cover object-center" : "object-contain object-center"}`}
          src={`/images/carousel/${currentImage}`}
          alt=""
          loading="eager"
          decoding="async"
          width={205}
          height={256}
        />
        <button
          type="button"
          className="absolute top-1/2 right-1 z-10 -translate-y-1/2 p-1 hover:scale-105 hover:cursor-pointer sm:right-2"
          onClick={() => changeImage(1)}
          aria-label="Next image"
        >
          <svg
            className="h-10 w-8 sm:h-[60px] sm:w-[50px]"
            viewBox="0 0 50 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <polyline
              points="12,4 38,30 12,56"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
