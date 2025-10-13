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
        className="gig-ticket-button gig-ticket-button-passed"
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
        className="gig-ticket-button"
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
      <div className="gig-container">
        <div className="gig-info-container">
          <h1 className="gig-date">{formatDateTimePretty(gig.gig.datetime)}</h1>
          <h1 className="gig-title">{gig.gig.venue.name}</h1>
          <h2 className="gig-location-street">
            {gig.gig.venue.streed_address}
          </h2>
          <h2 className="gig-location-city">{gig.gig.venue.city}</h2>
          <h2 className="gig-location-postal-code">
            {gig.gig.venue.postal_code}
          </h2>
          <h2 className="gig-location-country">{gig.gig.venue.country}</h2>
          <p className="gig-description">{gig.gig.description}</p>
        </div>
        <div className="gig-ticket-button-container">
          {compareDatesForButton(gig.gig.datetime, gig.gig.url)}
        </div>
      </div>
    </>
  );
}
