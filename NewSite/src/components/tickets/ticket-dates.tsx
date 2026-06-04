import { useEffect, useState, type ReactNode } from "react";
import {
  fetchShows,
  type ShowDateFilter,
} from "../../lib/bandsintown";
import type { DisplayGig } from "./gig-date";
import GigDate from "./gig-date";

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; gigs: DisplayGig[] };

const FILTERS: { label: string; value: ShowDateFilter }[] = [
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
  { label: "All", value: "all" },
];

const FILTER_HEADING: Record<ShowDateFilter, string> = {
  upcoming: "Upcoming shows",
  past: "Past shows",
  all: "All shows",
};

function filterButtonClass(active: boolean): string {
  const base =
    "rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 sm:text-base";
  return active
    ? `${base} bg-[rgba(215,35,35,1)] text-white shadow-sm hover:bg-[rgba(126,21,21,1)]`
    : `${base} text-antiquewhite/70 hover:bg-white/10 hover:text-antiquewhite`;
}

function StatusMessage({ children }: { children: ReactNode }) {
  return (
    <p className="py-16 text-center text-xl text-antiquewhite/80 sm:text-2xl">
      {children}
    </p>
  );
}

function GigCardSkeleton() {
  return (
    <div
      className="flex animate-pulse flex-col gap-5 rounded-lg border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between"
      aria-hidden
    >
      <div className="flex flex-1 flex-col gap-3">
        <div className="h-7 w-3/4 max-w-sm rounded bg-white/20" />
        <div className="h-7 w-1/2 max-w-xs rounded bg-white/15" />
        <div className="h-4 w-2/3 max-w-md rounded bg-white/10" />
      </div>
      <div className="h-12 w-32 shrink-0 rounded-md bg-white/20" />
    </div>
  );
}

function GigList({ loadState }: { loadState: LoadState }) {
  if (loadState.status === "loading") {
    return (
      <div
        className="flex flex-col gap-4"
        role="status"
        aria-busy="true"
        aria-label="Loading shows"
      >
        <span className="sr-only">Loading shows</span>
        <GigCardSkeleton />
        <GigCardSkeleton />
      </div>
    );
  }

  if (loadState.status === "error") {
    return <StatusMessage>{loadState.message}</StatusMessage>;
  }

  if (loadState.gigs.length === 0) {
    return <StatusMessage>No shows currently booked.</StatusMessage>;
  }

  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      {loadState.gigs.map((gig) => (
        <li key={gig.id}>
          <GigDate gig={gig} />
        </li>
      ))}
    </ul>
  );
}

export default function TicketDates() {
  const [filter, setFilter] = useState<ShowDateFilter>("all");
  const [loadState, setLoadState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoadState({ status: "loading" });
      const result = await fetchShows(filter);
      if (cancelled) return;

      if (result.ok === false) {
        setLoadState({ status: "error", message: result.message });
        return;
      }

      const now = Date.now();
      const gigs = result.gigs.map((gig) => ({
        ...gig,
        isPast: now > Date.parse(gig.datetime),
      }));
      setLoadState({ status: "ready", gigs });
    })();

    return () => {
      cancelled = true;
    };
  }, [filter]);

  return (
    <div className="font-supreme mx-auto w-full max-w-4xl px-5 pb-16">
      <header className="flex flex-col gap-6 border-b border-white/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="m-0 text-left text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {FILTER_HEADING[filter]}
        </h2>

        <div
          className="flex flex-wrap gap-1 rounded-lg border border-white/15 bg-black/40 p-1"
          role="tablist"
          aria-label="Show date range"
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={filter === value}
              className={filterButtonClass(filter === value)}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-6">
        <GigList loadState={loadState} />
      </div>
    </div>
  );
}
