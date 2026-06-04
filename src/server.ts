import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";

type ShowDateFilter = "upcoming" | "past" | "all";

interface ShowsRequestBody {
  date?: string;
}

const PORT = Number(process.env.PORT ?? 3000);

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

function readJsonBody<T>(request: IncomingMessage): Promise<T | null> {
  return new Promise((resolve, reject) => {
    let data = "";
    request.on("data", (chunk: Buffer) => {
      data += chunk.toString();
    });
    request.on("end", () => {
      if (!data) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(data) as T);
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    request.on("error", reject);
  });
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
    throw new Error(
      "ERR: No process.env.BANDS_IN_TOWN_API_KEY found in environment vars",
    );
  }

  const bandsInTownBaseURL = `https://rest.bandsintown.com/artists/burnt%20chapter/events?app_id=${process.env.BANDS_IN_TOWN_API_KEY}&date=${date}`;

  const apiResponse = await fetch(bandsInTownBaseURL);
  if (!apiResponse.ok) {
    throw new Error(`HTTP error! status: ${apiResponse.status}`);
  }

  const data: unknown = await apiResponse.json();
  if (!data) {
    throw new Error("ERR: Something went wrong with bandsInTownAPIResponse");
  }

  return data;
}

async function handleShowsRequest(
  date: ShowDateFilter | null,
  res: ServerResponse,
): Promise<void> {
  if (!date) {
    sendJson(res, 400, {
      error:
        'The key of [\'date\'] MUST be a single string of "upcoming", "past" or "all".',
    });
    return;
  }

  try {
    const data = await fetchBandsInTownShows(date);
    sendJson(res, 200, {
      success: true,
      message: "Data received from bandsInTownAPI",
      data,
    });
  } catch (error: unknown) {
    sendJson(res, 400, {
      error: `Unexpected Error: [${error instanceof Error ? error.message : error}]`,
    });
  }
}

async function handleRequest(
  request: IncomingMessage,
  response: ServerResponse,
): Promise<void> {
  const url = new URL(
    request.url ?? "/",
    `http://${request.headers.host ?? "localhost"}`,
  );

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/shows") {
    try {
      const body = await readJsonBody<ShowsRequestBody>(request);
      if (!body) {
        sendJson(response, 400, { error: "No body found" });
        return;
      }
      if (!body.date) {
        sendJson(response, 400, {
          error: `No key of ['date'] found: [${JSON.stringify(body)}]`,
        });
        return;
      }
      await handleShowsRequest(parseShowDate(body.date), response);
    } catch (error: unknown) {
      sendJson(response, 400, {
        error: `Unexpected Error: [${error instanceof Error ? error.message : error}]`,
      });
    }
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/shows") {
    await handleShowsRequest(parseShowDate(url.searchParams.get("date")), response);
    return;
  }

  sendJson(response, 404, { error: "Not found" });
}

const server = createServer((request, response) => {
  void handleRequest(request, response).catch((error: unknown) => {
    console.error(error);
    if (!response.headersSent) {
      sendJson(response, 500, { error: "Internal server error" });
    }
  });
});

server.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
