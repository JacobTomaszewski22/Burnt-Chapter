export default function TicketHeader(props) {
  return (
    <>
      {/* <link rel="stylesheet" href="styles/tickets/ticketHeader.css" /> */}
      <div className="ticket-header-container relative">
        <div className="ticket-header relative">
          <div className="ticket-header-image-container relative w-full">
            {/* PLACEHOLDER FOR REAL IMAGE\/ */}
            <img
              id="ticket-header-image"
              className="ticket-header-image max-w-full w-full -z-10 h-full object-cover sticky top-0"
              src="/images/newSecondHeader.webp"
              loading="eager"
            />
          </div>
          <div className="ticket-header-text-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black py-[5px] px-5 flex justify-center items-center z-[1]">
            <h1 className="ticket-header-text m-0">{props.titleText}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
