import { Spotify } from "react-spotify-embed";
import { useEffect, useRef, useState } from "react";

export default function OurMusic() {
  //Maybe introduce this: https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  //We want to create an observer that will check if the video is in frame. If it is not we dont load it. 
  // If it is (or 100 px before it is) then we want to load it. This will reduce the large initial bandwidth
  useEffect(() => {
    const video = videoRef.current;
    if(!video) return;

    //create an instersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            //this is when the video is visible, so we start loading it
            setIsVideoVisible(true);
            setShouldLoadVideo(true);
            //stop observing once we've triggered loading
            observer.unobserve(video);
          }
        });
      },
      {
        //set up to trigger when video is 100px away from being visible
        rootMargin: '100px',
        threshold: 0.1
      }
    );
    observer.observe(video);

    //cleanup
    return() => {
      if (video) observer.unobserve(video);
    };
  }, []);

  //video loading and autoplay once loaded
  useEffect(() =>{
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const handleCanPlay = () => {
      //video is ready, start playiing
      video.play().catch(console.error);
    };

    video.addEventListener('canplay', handleCanPlay);
    return() => video.removeEventListener('canplay', handleCanPlay);
  }, [shouldLoadVideo]);

  return (
    <div className="our_music_div">
      {/* <link rel="stylesheet" href="styles/OurMusicStyle.css" /> */}
      <h1>Listen</h1>
      <hr />
      <div className="music_content_div">
        <video
          ref={videoRef}
          width="50%"
          height="100%"
          loop
          muted
          className="live_gig_video"
          loading="lazy" 
          style = {{
            backgroundColor: '#1a1a1a', // Placeholder background
            minHeight: '200px' // Prevent layout shift
          }}
        >
          {shouldLoadVideo && (
            <source src="videos/live_vid_lower_size.mov" type="video/mp4" />
          )}
        </video>
        <div className="our_music_right_div">
          <Spotify
            className="spotify_player"
            link="https://open.spotify.com/artist/1ggfLpkzXNWzHIR8kUno4q?si=KsARGwz1QEWtEGRuMLgaow"
          />
          <div className="review_2">
            <h2 className="review_big review_2_big">
              "DEFINITELY A BAND TO KEEP AN EYE OUT FOR."
            </h2>
            <div className="review_small review_2_small">
              - Loud Enough Magazine
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
