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
            src="/images/bleed.webp"
            loading="lazy"
          />
        </div>
        <div className="new-music-writeup">
          <h3 className="new-music-song-title">Bleed For Me</h3>
          <p>
            We are releasing our fourth single ‘Bleed For Me’ on October 31st! A
            massive song with a catchy chorus that WILL get stuck in your head.
          </p>
          <p>
            This song is about innocent people being sent off to die in a war
            they don’t care for. Its themes involve Death, Destruction and
            Inevitability. Musically it is a song you can sing to and you
            Heathens that have seen us like know: The crowd loves it!.
          </p>
          <p>Pre save link:</p>
          <div className="new-music-presave-link-container">
            <a
              href="https://distrokid.com/hyperfollow/burntchapter/bleed-for-me/"
              className="new-music-presave-link"
            >
              https://distrokid.com/hyperfollow/burntchapter/bleed-for-me/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
