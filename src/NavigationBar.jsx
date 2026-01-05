import { Link } from "@tanstack/react-router";
import { useScrollPosition } from "./useScrollPosition";
import StickyPlayer from "./StickyPlayer";
import { capitaliseFirstLetter } from "./generalFunctions";

function Divider() {
  return (
    <div className="navigation-bar-divider max-h-[5vh]">
      <img
        className="navigation-divider-image max-h-[5vh]"
        src="/images/divider.webp"
        loading="eager"
      />
    </div>
  );
}

function NavigationLink(props) {
  return (
    <>
      <div className="navigation-link-div text-[100%] h-full flex items-center text-center w-[8vw] tablet-lg:w-[20vw] mobile:w-[20vw] hover:bg-[rgb(46,40,40)] hover:cursor-pointer hover:text-[rgb(215,35,35)]">
        <Link
          className={`navigation-link navigation-link-${props.LinkString} no-underline block w-full h-full hover:text-[rgb(215,35,35)] hover:cursor-pointer`}
          to={`/${props.LinkString}`}
        >
          <p>{capitaliseFirstLetter(props.LinkString)}</p>
        </Link>
      </div>
      <Divider />
    </>
  );
}

export default function NavigationBar() {
  const scrollPosition = useScrollPosition();
  //If the window has scrolled down to this boundary
  let navBarElement = null;
  try {
    navBarElement = document.getElementsByClassName(
      "navigation-bar-container",
    )[0];
    if (scrollPosition > 300) {
      if (!navBarElement) {
        throw new Error(
          "Error in Navigation Bar Scrolling: Cannot find any element by name [ navigation-bar-container ]",
        );
      } else {
        navBarElement.style.animation =
          "animation-scroll-forwards 0.5s ease-out forwards";
      }
    } else {
      if (!navBarElement) {
        throw new Error(
          "Error in Navigation Bar Scrolling: Cannot find any element by name [ navigation-bar-container ]",
        );
      } else {
        navBarElement.style.animation =
          "animation-scroll-backwards 0.5s ease-in forwards";
      }
    }
  } catch {
    console.log("Element [navigation-bar-container] not mounted yet");
  }

  return (
    <>
      {/* <link rel="stylesheet" href="styles/navigationBarStyle.css" /> */}
      <div className="navigation-bar-container sticky top-0 z-[2] max-w-full max-h-[8vh] bg-[rgb(17,15,15)] mobile:relative">
        <div className="navigation-bar flex max-w-full flex-row flex-wrap justify-start items-center h-full gap-0 pt-[3px] bg-[rgb(17,15,15)]">
          <div className="navigation-home max-h-[5vh] pl-[6vw] pr-[3vw] hover:cursor-pointer hover:scale-110">
            <Link to="/">
              <img
                className="navigation-home-image max-h-[5vh] p-0"
                src="/images/bcLogoBig.webp"
                loading="eager"
              />
            </Link>
          </div>
          <Divider />
          <NavigationLink LinkString="tickets" />
          {/* <NavigationLink LinkString="news"/> */}
          <NavigationLink LinkString="photos" />
          <NavigationLink LinkString="contact" />
          {/* <NavigationLink LinkString="EPK" /> */}
          {/* <div className="navigation-bar-player">
            <StickyPlayer />
          </div> */}
        </div>
      </div>
    </>
  );
}
