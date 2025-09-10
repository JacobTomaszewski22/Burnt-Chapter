/*A landing page comprised of
    -Bio
    -Music
    -Contact us
*/
import Biography from "./Biography";
import OurMusic from "./OurMusic";
import ContactUs from "./ContactUs";

export default function LandingPage(){
    return(
        <>
            <Biography />
            <OurMusic />
            <ContactUs />
        </>

    )
}