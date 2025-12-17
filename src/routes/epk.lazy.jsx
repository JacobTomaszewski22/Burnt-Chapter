import { createLazyFileRoute } from "@tanstack/react-router";
import TicketHeader from "../tickets/TicketHeader";
import NavigationBar from "../NavigationBar";

export const Route = createLazyFileRoute("/epk")({
  component: EPK,
});

function EPK() {
  return (
    <>
      <TicketHeader titleText="Electronic Press Kit" />
      <NavigationBar />
    </>
  );
}
