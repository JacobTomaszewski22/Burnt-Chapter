export default function NewMusic() {
  return (
    <div className="new-music-total-container">
      <hr />
      <h1 className="new-music-top-title">&#128227; New Music &#128227;</h1>
      <hr />
      <div className="new-music-container">
        <div className="mew-music-image-container">
          <img
            className="new-music-image"
            src="/images/scorched.webp"
            loading="lazy"
          />
        </div>
        <div className="new-music-writeup">
          <h3 className="new-music-song-title">Scorched</h3>
          <p>We have now released our first EP: Scorched</p>
          <p>
            This EP is the culmination of our first year of writing, capturing
            the essence of Burnt Chapter. It contains four of our released
            tracks, and one previously unreleased track. This is now a complete
            artistic product and how we always intended for our listeners to
            hear the tracks. We hope you enjoy listening to it as much as we
            enjoyed creating it.
          </p>
          <div className="new-music-presave-link-container">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/album/3xaomAWtR3PqRum0aIIBmr?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
