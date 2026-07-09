import { useState, useEffect } from "react";
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize(); // set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export function NewReleasesGrid() {
  return (
    <div
      className="grid w-full min-w-0 grid-cols-1 gap-x-4 gap-y-3 bg-black px-4 py-5 text-white sm:px-5 md:grid-cols-2"
      id="new-releases"
    >
      {/* Row 1: Titles */}
      <h2 className="py-4 text-center font-supreme text-4xl font-bold sm:text-6xl lg:text-9xl">
        SIMIAN
      </h2>
      <h2 className="py-4 text-center font-supreme text-4xl font-bold sm:text-6xl lg:text-8xl">
        ONE LESS PARASITE
      </h2>

      {/* Row 2: Subtitles */}
      <h2 className="text-center font-supreme text-2xl sm:text-4xl lg:text-6xl">
        Devolve to Simian
      </h2>
      <h2 className="text-center font-supreme text-2xl sm:text-4xl lg:text-6xl">
        The First Single Off of Our Upcoming EP
      </h2>

      {/* Row 3: Videos */}
      <div className="mt-3 flex w-full min-w-0 items-center justify-center px-2 py-5 sm:px-5">
        <iframe
          className="aspect-video w-full max-w-4xl"
          src="https://www.youtube.com/embed/dyjmilw7pQk?si=9rlLxanPjxpHqRQL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
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

export function NewReleasesList() {
  return (
    <div className="flex md:flex-row sm:flex-row flex-col">
      <div
      className="flex w-full min-w-0 flex-col bg-black px-4 py-5 text-white sm:px-5"
      id="new-releases"
    >
      <div className="flex flex-col">
        <h2 className="py-4 text-center font-supreme text-4xl font-bold sm:text-6xl lg:text-9xl">
          SIMIAN
        </h2>
        <h2 className="text-center font-supreme text-2xl sm:text-4xl lg:text-6xl">
          Out Now
        </h2>
      </div>

      <div className="mt-3 flex w-full min-w-0 items-center justify-center px-2 py-5 sm:px-5">
        <iframe
          className="aspect-video w-full max-w-4xl"
          src="https://www.youtube.com/embed/dyjmilw7pQk?si=9rlLxanPjxpHqRQL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
      <div
        className="flex w-full min-w-0 flex-col bg-black px-4 py-5 text-white sm:px-5"
      >
        <div className="flex flex-col">
          <h2 className="py-4 text-center font-supreme text-4xl font-bold sm:text-6xl lg:text-8xl">
            ONE LESS PARASITE
          </h2>
          <h2 className="text-center font-supreme text-2xl sm:text-4xl lg:text-6xl">
            The First Single Off of Our Upcoming EP
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
    </div>
  );
}

export default function NewReleases(){
  const { width } = useWindowSize();
  
  if(width>=1024){
    return(
      <NewReleasesGrid/>
    )
  }else{
    return(
      <NewReleasesList/>
    )
  }
}