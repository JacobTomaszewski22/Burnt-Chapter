// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BandImageHeader from "./BandImageHeader";
import StickyPlayer from "./StickyPlayer";
import LandingPage from "./LandingPage";
import BandPageFooter from "./BandPageFooter";

//Create our app component
const App = () => {
  return (
    <div>
      <BandImageHeader />
      <StickyPlayer />
      <LandingPage />
      <BandPageFooter />
    </div>
  );
};

//Create a container and set it to the root element
const container = document.getElementById("root");
const root = createRoot(container);
//Render the app
// root.render(<StrictMode><App/></StrictMode>);
root.render(<App />);
