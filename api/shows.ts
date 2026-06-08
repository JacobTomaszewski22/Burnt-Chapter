import type { VercelRequest, VercelResponse } from "@vercel/node";

type ShowDateFilter = "upcoming" | "past" | "all";

interface ShowsRequestBody {
  date?: string;
}

function parseShowDate(
  value: string | null | undefined,
): ShowDateFilter | null {
  if (value === "upcoming" || value === "past" || value === "all") {
    return value;
  }
  return null;
}

async function fetchBandsInTownShows(date: ShowDateFilter): Promise<unknown> {
  if (!process.env.BANDS_IN_TOWN_API_KEY) {
    throw new Error("No BANDS_IN_TOWN_API_KEY found in environment vars");
  }

  const url = `https://rest.bandsintown.com/artists/burnt%20chapter/events?app_id=${process.env.BANDS_IN_TOWN_API_KEY}&date=${date}`;

  const apiResponse = await fetch(url);
  if (!apiResponse.ok) {
    throw new Error(`Bands in Town HTTP error: ${apiResponse.status}`);
  }

  const data: unknown = await apiResponse.json();
  if (!data) {
    throw new Error("Empty response from Bands in Town API");
  }

  return data;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
): Promise<void> {
  // Health check
  if (request.method === "GET" && request.url === "/api/shows/health") {
    response.status(200).json({ status: "ok" });
    return;
  }

  // GET /api/shows?date=upcoming
  if (request.method === "GET") {
    const date = parseShowDate(
      Array.isArray(request.query.date)
        ? request.query.date[0]
        : request.query.date,
    );
    if (!date) {
      response.status(400).json({
        error: 'Query param "date" must be "upcoming", "past", or "all".',
      });
      return;
    }
    try {
      const data = await fetchBandsInTownShows(date);
      response.status(200).json({ success: true, data });
    } catch (err) {
      response.status(500).json({ error: (err as Error).message });
    }
    return;
  }

  // POST /api/shows  { "date": "upcoming" }
  if (request.method === "POST") {
    const body = request.body as ShowsRequestBody | undefined;
    if (!body?.date) {
      response.status(400).json({ error: 'Body must contain a "date" key.' });
      return;
    }
    const date = parseShowDate(body.date);
    if (!date) {
      response.status(400).json({
        error: 'The "date" field must be "upcoming", "past", or "all".',
      });
      return;
    }
    try {
      const data = await fetchBandsInTownShows(date);
      response.status(200).json({ success: true, data });
    } catch (err) {
      response.status(500).json({ error: (err as Error).message });
    }
    return;
  }

  response.status(405).json({ error: "Method not allowed" });
}