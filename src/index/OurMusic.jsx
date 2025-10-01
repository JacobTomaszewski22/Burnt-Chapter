import { Spotify } from "react-spotify-embed";

export default function OurMusic() {
  //Maybe introduce this: https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api

  return (
    <div className="our_music_div">
      <link rel="stylesheet" href="styles/OurMusicStyle.css" />
      <h1>Listen</h1>
      <hr />
      <div className="music_content_div">
        <video
          width="50%"
          height="100%"
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          className="live_gig_video"
          loading="lazy" 
        >
          <source src="videos/live_vid_lower_size.mov" type="video/mp4" />
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
