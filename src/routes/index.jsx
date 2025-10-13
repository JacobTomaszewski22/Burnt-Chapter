/*A landing page comprised of
    -Bio
    -Music
    -Contact us
*/
import { createFileRoute } from "@tanstack/react-router";
import Biography from "../index/Biography";
import OurMusic from "../index/OurMusic";
import ContactUs from "../index/ContactUs";
import EmailerSignup from "../index/EmailerSignup";

import BandImageHeader from "../index/BandImageHeader";
import NavigationBar from "../NavigationBar";
import NewMusic from "../index/NewMusic";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <BandImageHeader />
      <NavigationBar />
      <EmailerSignup />
      <NewMusic />
      <Biography />
      <OurMusic />
      <ContactUs />
    </>
  );
}
