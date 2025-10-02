import { Link } from "@tanstack/react-router";
import { useScrollPosition } from "./useScrollPosition";
import StickyPlayer from "./StickyPlayer";
import { capitaliseFirstLetter } from "./generalFunctions";

function Divider() {
    return(
          <div className="navigation-bar-divider">
            <img
              className="navigation-divider-image"
              src="/images/divider.webp"
              loading="eager"
            />
          </div>
    )
}

function NavigationLink(props){
  return(
    <>
    <div className="navigation-link-div">
            <Link
              className={`navigation-link navigation-link-${props.LinkString}`}
              to={`/${props.LinkString}`}
            >
              <p>{capitaliseFirstLetter(props.LinkString)}</p>
            </Link>
    </div>
    <Divider/>
    </>
  )
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
      <div className="navigation-bar-container">
        <div className="navigation-bar">
          <div className="navigation-home">
            <Link to="/">
              <img
                className="navigation-home-image"
                src="/images/bcLogoBig.webp"
                loading="eager"
              />
            </Link>
          </div>
            <Divider/>
          <NavigationLink LinkString="tickets"/>
          {/* <NavigationLink LinkString="news"/> */}
          <NavigationLink LinkString="photos"/>
          <NavigationLink LinkString="contact"/>
          <div className="navigation-bar-player">
            <StickyPlayer />
          </div>
        </div>
      </div>
    </>
  );
}
