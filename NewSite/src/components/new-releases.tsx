export default function NewReleases() {
  return (
    <div
      className="flex w-full min-w-0 flex-col bg-black px-4 py-5 text-white sm:px-5"
      id="new-releases"
    >
      <div className="flex flex-col">
        <h2 className="py-4 text-center font-supreme text-4xl font-bold sm:text-6xl lg:text-9xl">
          ONE LESS PARASITE
        </h2>
        <h2 className="text-center font-supreme text-2xl sm:text-4xl lg:text-6xl">
          Out Now
        </h2>
      </div>

      <div className="mt-3 flex w-full min-w-0 items-center justify-center px-2 py-5 sm:px-5">
        <iframe
          className="aspect-video w-full max-w-4xl"
          src="https://www.youtube.com/embed/XQchKMJeLag?si=ZeN67_5zOZRXc1-n"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
