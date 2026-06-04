import TicketButtons from "./ticket-buttons";
import TicketDates from "./ticket-dates";

export default function Tickets() {
  return (
    <section id="tickets" className="relative z-10 w-full bg-black px-4 pt-10 sm:pt-16">
      <h2 className="mb-5 px-2 text-center font-supreme text-4xl font-bold leading-tight sm:text-6xl lg:text-9xl">
        COME SEE THE CARNAGE
      </h2>
      <TicketButtons />
      <TicketDates />
    </section>
  );
}
