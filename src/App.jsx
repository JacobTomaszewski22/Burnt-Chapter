import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
// import "./main.css"

const router = createRouter({ routeTree });

//Create our app component
const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

//Create a container and set it to the root element
const container = document.getElementById("root");
const root = createRoot(container);
//Render the app
// root.render(<StrictMode><App/></StrictMode>);
root.render(<App />);
