function formatDateTimePretty(dateTimeString) {
  const date = new Date(dateTimeString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleDateString("en-US", options);
}

function compareDatesForButton(gigDateTime, url) {
  let gigParsedDateTime = Date.parse(gigDateTime);
  //If the current date is passed the gig start time
  if (Date.now() > gigParsedDateTime) {
    return (
      <a
        className="gig-ticket-button gig-ticket-button-passed py-4 px-8 rounded-lg text-white no-underline uppercase whitespace-nowrap bg-[rgb(51,38,38)] hover:bg-[rgb(32,24,24)] hover:cursor-pointer transition-all duration-200"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        I Was There
      </a>
    );
  } else {
    return (
      <a
        className="gig-ticket-button py-4 px-8 rounded-lg text-white no-underline uppercase whitespace-nowrap bg-[rgba(215,35,35,1)] hover:bg-[rgba(126,21,21,1)] hover:cursor-pointer hover:scale-105 transition-all duration-200"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Tickets
      </a>
    );
  }
}

export default function GigDate(gig) {
  // console.log(`\n\nGig Info: ${JSON.stringify(gig.gig.venue)}\n\n`);
  return (
    <>
      <hr />
      <div className="gig-container m-8 mx-[4%] p-8 flex flex-row gap-5 justify-between max-w-screen mobile:flex-col">
        <div className="gig-info-container flex flex-col mobile:mr-[2vw]">
          <h1 className="gig-date m-0 text-[1.8rem]">{formatDateTimePretty(gig.gig.datetime)}</h1>
          <h1 className="gig-title m-0 text-[1.8rem]">{gig.gig.venue.name}</h1>
          <h2 className="gig-location-street my-[0.2rem] text-[1.1rem]">
            {gig.gig.venue.streed_address}
          </h2>
          <h2 className="gig-location-city my-[0.2rem] text-[1.1rem]">{gig.gig.venue.city}</h2>
          <h2 className="gig-location-postal-code my-[0.2rem] text-[1.1rem]">
            {gig.gig.venue.postal_code}
          </h2>
          <h2 className="gig-location-country my-[0.2rem] text-[1.1rem]">{gig.gig.venue.country}</h2>
          <p className="gig-description">{gig.gig.description}</p>
        </div>
        <div className="gig-ticket-button-container flex items-center ml-8 self-center">
          {compareDatesForButton(gig.gig.datetime, gig.gig.url)}
        </div>
      </div>
    </>
  );
}
