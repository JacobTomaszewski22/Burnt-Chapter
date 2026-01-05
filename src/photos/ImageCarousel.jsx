import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ImageCarousel() {
  const images = Array.from(Array(11).keys());
  const imageReactArray = images.map((image) => (
    <SplideSlide key={image.toString()}>
      <img
        className="slide-image max-w-full max-h-[80vh] w-auto h-auto object-contain block mx-auto my-0 [@media(max-width:768px)]:max-h-[60vh] [@media(min-aspect-ratio:1/2)]:max-h-[70vh]"
        src={`/images/image-page-photos/${image.toString()}.webp`}
        alt={`Band image ${image.toString()}`}
        loading="lazy"
      />
    </SplideSlide>
  ));
  return (
    <>
      {/* <link rel="stylesheet" href="styles/photos/imageCarousel.css" /> */}
      <div className="image-slide-container max-w-screen mx-auto p-5 [@media(max-width:768px)]:p-2.5">
        <Splide aria-label="BurntChapterImages" className="py-5 [@media(max-width:768px)]:min-h-[300px]">
          {imageReactArray}
        </Splide>
      </div>
    </>
  );
}
