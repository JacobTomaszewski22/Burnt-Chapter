import { createLazyFileRoute } from "@tanstack/react-router";
import TicketHeader from "../tickets/TicketHeader";
import NavigationBar from "../NavigationBar";
import ContactUs from "../index/ContactUs";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <TicketHeader titleText="Get In Touch" />
      <NavigationBar />
      <ContactUs />
      <div className="contact_us_writing">
        <h4>
          You can also get in touch with us via any of our social media pages,
          found below
        </h4>
      </div>
    </>
  );
}
