import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SpeedInsights } from "@vercel/speed-insights/react";

import BandPageFooter from "../BandPageFooter";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <BandPageFooter />
      <SpeedInsights />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
