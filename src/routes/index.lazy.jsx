/*A landing page comprised of
    -Bio
    -Music
    -Contact us
*/
import { createLazyFileRoute } from "@tanstack/react-router";
import Biography from "../Biography";
import OurMusic from "../OurMusic";
import ContactUs from "../ContactUs";
import EmailerSignup from "../EmailerSignup";

import BandImageHeader from "../BandImageHeader";
import NavigationBar from "../NavigationBar";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <BandImageHeader />
      <NavigationBar />
      <EmailerSignup />
      <Biography />
      <OurMusic />
      <ContactUs />
    </>
  );
}
