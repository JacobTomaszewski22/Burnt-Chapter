export default function TicketButtons() {
  return (
    <>
      {/* <link rel="stylesheet" href="styles/tickets/ticketButtons.css" /> */}
      <div className="top-buttons-container relative flex flex-row justify-center gap-[5vw] mt-[1vh] mb-[1vh] tablet-lg:mt-[4vh] tablet-sm:mt-[8vh] mobile:mt-[10vh]">
        <div className="follow-button-container ticket-button">
          <iframe
            src="https://bandsintown.com/artist/id_15581409/track_button?actor_type=ARTIST&background_color=rgba(215,35,35,1)&hover_color=rgba(126,21,21,1)&font=&bitIcon=show&text=FOLLOW&text_color=rgba(255,255,255,1)&locale=en&display_tracker_count=hide&size=large&appId=ID_15581409&affilCode="
            title="newsletter-widget"
            className="follow-button ticket-button border-0 hover:cursor-pointer hover:scale-105"
            height="35"
            width="120"
            scrolling="no"
            frameBorder="0"
            // style={followButtonStyle}
            // allowTransparency="true"
          ></iframe>
        </div>
        <div className="request-button-container ">
          <form action="https://www.bandsintown.com/artist-subscribe/15581409-burnt-chapter?affil_code=js_&app_id=js_&bg-color=rgba%28255%2C255%2C255%2C1%29&border-color=rgba%2874%2C74%2C74%2C1%29&came_from=700&cta-bg-color=rgba%2874%2C74%2C74%2C1%29&cta-border-color=rgba%2874%2C74%2C74%2C1%29&cta-border-radius=2px&cta-border-width=0px&cta-text-color=rgba%28255%2C255%2C255%2C1%29&font=Helvetica&play-my-city=true&signature=ZZ6076a9cf29f868064f955d426bb303cfacf10fa4d30ea9390f5013a920e19a3e&spn=0&text-color=rgba%2866%2C66%2C66%2C1%29&utm_campaign=play_my_city&utm_medium=web&utm_source=widget">
            <input
              type="submit"
              value="🎟️ Request a Show"
              className="request-button ticket-button p-2.5 rounded-md text-white border-0 h-[37px] w-[200px] bg-[rgba(215,35,35,1)] hover:bg-[rgba(126,21,21,1)] hover:cursor-pointer hover:scale-105"
            />
          </form>
        </div>
      </div>
    </>
  );
}
