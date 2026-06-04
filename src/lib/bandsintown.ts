export type ShowDateFilter = "upcoming" | "past" | "all";

export interface BandsInTownVenue {
  name: string;
  street_address?: string;
  /** Legacy typo used in old site code; BIT API uses street_address */
  streed_address?: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface BandsInTownEvent {
  id: string;
  datetime: string;
  url: string;
  description: string;
  venue: BandsInTownVenue;
  dateTimeUnixFormat?: number;
}

interface ShowsApiSuccess {
  success: true;
  message: string;
  data: BandsInTownEvent[];
}

interface ShowsApiFailure {
  success?: false;
  error?: string;
}

export type FetchShowsResult =
  | { ok: true; gigs: BandsInTownEvent[] }
  | { ok: false; message: string };

function sortGigsByDatetime(gigs: BandsInTownEvent[]): BandsInTownEvent[] {
  const withTimestamps = gigs.map((gig) => ({
    ...gig,
    dateTimeUnixFormat: Date.parse(gig.datetime),
  }));

  return withTimestamps.sort(
    (a, b) => (b.dateTimeUnixFormat ?? 0) - (a.dateTimeUnixFormat ?? 0),
  );
}

export async function fetchShows(
  filter: ShowDateFilter,
): Promise<FetchShowsResult> {
  try {
    const response = await fetch("/api/shows", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: filter }),
    });

    const responseData = (await response.json()) as
      | ShowsApiSuccess
      | ShowsApiFailure;

    if (!response.ok) {
      return {
        ok: false,
        message:
          ("error" in responseData && responseData.error) ||
          "Error Communicating With Bands In Town",
      };
    }

    if (responseData.success === true && Array.isArray(responseData.data)) {
      return { ok: true, gigs: sortGigsByDatetime(responseData.data) };
    }

    return {
      ok: false,
      message: "Error Communicating With Bands In Town",
    };
  } catch (error) {
    console.error("Error fetching shows:", error);
    return {
      ok: false,
      message: "Error Communicating With Bands In Town",
    };
  }
}
