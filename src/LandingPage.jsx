/*A landing page comprised of
    -Bio
    -Music
    -Contact us
*/
import Biography from "./Biography";
import OurMusic from "./OurMusic";
import ContactUs from "./ContactUs";
import EmailerSignup from "./EmailerSignup";

export default function LandingPage() {
  return (
    <>
      <EmailerSignup />
      <Biography />
      <OurMusic />
      <ContactUs />
    </>
  );
}
