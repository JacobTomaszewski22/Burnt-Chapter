export default function NewMusic() {
  return (
    <div className="new-music-total-container mx-auto py-6 px-4">
      <hr />
      <h1 className="new-music-top-title text-center mt-2 mb-4 font-semibold tracking-[0.5px]">&#128227; New Music &#128227;</h1>
      <hr />
      <div className="new-music-container grid gap-6 items-center mt-5 grid-cols-[1fr_1.2fr] [@media(max-width:900px)]:grid-cols-1 [@media(max-width:900px)]:gap-[18px]">
        <div className="mew-music-image-container flex justify-center items-center">
          <img
            className="new-music-image w-full max-w-[520px] h-auto rounded-lg object-cover shadow-[0_8px_24px_rgba(0,0,0,0.35)] [@media(max-width:900px)]:max-w-[640px]"
            src="/images/scorched.webp"
            loading="lazy"
          />
        </div>
        <div className="new-music-writeup leading-relaxed text-base">
          <h3 className="new-music-song-title m-0 mb-2 font-normal text-xl tracking-[0.3px]">Scorched</h3>
          <p>
            We have now released our first EP: Scorched
          </p>
          <p>
            This EP is the culmination of our first year of writing, capturing the essence of Burnt Chapter. It contains four of our released tracks, and one previously unreleased track. This is now a complete artistic product and how we always intended for our listeners to hear the tracks. We hope you enjoy listening to it as much as we enjoyed creating it.
          </p>
          <div className="new-music-presave-link-container mt-3">
          <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/3xaomAWtR3PqRum0aIIBmr?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
