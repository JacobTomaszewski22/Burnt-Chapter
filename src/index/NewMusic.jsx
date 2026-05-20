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
            src="/images/OneLess.webp"
            loading="lazy"
          />
        </div>
        <div className="new-music-writeup">
          <h3 className="new-music-song-title">One Less Parasite</h3>
          <p>
            It’s been a while. We’ve been in the studio cooking up some nasty Burnt Chapter goodness. This is the first single off of our new EP. One Less Parasite has groovy heaviness with a killer breakdown. This is also our first music video and we couldn’t be happier. It drops on the 28th of May. Check it out:
          </p>
          <a href="https://distrokid.com/hyperfollow/burntchapter/one-less-parasite/">https://distrokid.com/hyperfollow/burntchapter/one-less-parasite/</a>
          {/* <div className="new-music-presave-link-container">
            <iframe
              data-testid="embed-iframe"
              src="https://distrokid.com/hyperfollow/burntchapter/one-less-parasite/"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe> *

          </div> */}
        </div>
      </div>
    </div>
  );
}
