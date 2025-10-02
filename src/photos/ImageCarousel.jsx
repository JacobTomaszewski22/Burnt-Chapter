import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ImageCarousel() {
    const images = Array.from(Array(13).keys());
    const imageReactArray = images.map((image) => 
                    <SplideSlide key={image.toString()}>
                        <img 
                        className='slide-image' 
                        src={`/images/image-page-photos/${image.toString()}.webp`} 
                        alt={`Band image ${image.toString()}`}
                        loading="lazy"/>
                    </SplideSlide>
                );
    return(
        <>
        {/* <link rel="stylesheet" href="styles/photos/imageCarousel.css" /> */}
        <div className="image-slide-container">
            <Splide aria-label="BurntChapterImages">
                {imageReactArray}
            </Splide>
        </div>
        </>
    )

      
}