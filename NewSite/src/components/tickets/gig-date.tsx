import type { BandsInTownEvent } from "../../lib/bandsintown";

export type DisplayGig = BandsInTownEvent & { isPast: boolean };

function formatDateTimePretty(dateTimeString: string): string {
  return new Date(dateTimeString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatLocation(venue: BandsInTownEvent["venue"]): string {
  const street = venue.street_address ?? venue.streed_address;
  const parts = [
    street,
    venue.city,
    venue.postal_code,
    venue.country,
  ].filter(Boolean);
  return parts.join(" · ");
}

const ticketButtonClass =
  "inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105 sm:w-auto";

function GigTicketButton({ isPast, url }: { isPast: boolean; url: string }) {
  return (
    <a
      className={
        isPast
          ? `${ticketButtonClass} bg-white/15 text-antiquewhite hover:bg-white/25`
          : `${ticketButtonClass} bg-[rgba(215,35,35,1)] text-white hover:bg-[rgba(126,21,21,1)]`
      }
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {isPast ? "I was there" : "Tickets"}
    </a>
  );
}

export default function GigDate({ gig }: { gig: DisplayGig }) {
  const location = formatLocation(gig.venue);

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 sm:gap-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 text-left">
        <time
          dateTime={gig.datetime}
          className="block text-lg font-bold sm:text-xl"
        >
          {formatDateTimePretty(gig.datetime)}
        </time>
        <h3 className="m-0 mt-1 text-xl font-bold sm:text-2xl lg:text-3xl">
          {gig.venue.name}
        </h3>
        {location && (
          <p className="mt-2 text-base text-antiquewhite/70 sm:text-lg">
            {location}
          </p>
        )}
        {gig.description && (
          <p className="mt-3 text-sm text-antiquewhite/60 sm:text-base">
            {gig.description}
          </p>
        )}
      </div>

      <div className="shrink-0 self-start sm:self-center">
        <GigTicketButton isPast={gig.isPast} url={gig.url} />
      </div>
    </article>
  );
}
