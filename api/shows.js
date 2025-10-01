//API route to act as middle end to poll the bands in town ticketing info. This is a read only API, so security doesnt need to be top notch, however for
// practice I am setting up another middle end API route
//Imports
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

//Create the fastify app
const app = Fastify({
  logger: true,
});

//set it to listen on port 3000
const PORT = process.env.PORT || 3000;

//set up the file system
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//register the app to a file
app.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

app.post("/api/shows", async (request, reply) => {
  try {
    //check if the request has an accessible body
    console.log(
      `New POST shows Request:\n Header: [${JSON.stringify(request.headers)}],\n Body: [${JSON.stringify(request.body)}]`,
    );

    //check if the request has an accessible body
    if (!request.body) {
      console.log("ERR: No Body Found");
      return reply
        .status(400)
        .send({ error: `No body found: [${request.body}]` });
    }
    console.log("Body Found");
    //check if the request has a key of date
    if (!request.body.date) {
      console.log("ERR: No body.date Found");
      return reply
        .status(400)
        .send({ error: `No key of ['date'] found: [${request.body}]` });
    }
    console.log("Date Found");
    //check if the request date has the acceptible values.
    //TO DO: implement date ranges
    let date = request.body.date;
    console.log(`String Date = ${date}`);
    console.log(`String Date type = ${typeof date}`);
    if (date != "upcoming" && date != "past" && date != "all") {
      console.log(
        `ERR: Body.date must be single string of "upcoming", "past" or "all". Data provided: [${date}]`,
      );
      return reply.status(400).send({
        error: `The key of ['date'] MUST be a single string of "upcoming", "past" or "all". Data provided: [${date}]`,
      });
    }
    console.log("Date in correct format");
    //creating the parameters for the API call
    if (!process.env.BANDS_IN_TOWN_API_KEY) {
      throw new Error(
        "ERR: No process.env.BANDS_IN_TOWN_API_KEY found in environment vars",
      );
    }
    console.log("API key found");
    let bandsInTownBaseURL = `https://rest.bandsintown.com/artists/burnt%20chapter/events?app_id=${process.env.BANDS_IN_TOWN_API_KEY}&date=${date}`;
    console.log(`API request sent to: [${bandsInTownBaseURL}]`);

    let bandsInTownAPIResponse = null;
    try {
      const response = await fetch(bandsInTownBaseURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      bandsInTownAPIResponse = await response.json();
      console.log(
        `\nBands In Town API Response: [${JSON.stringify(bandsInTownAPIResponse)}]`,
      );
    } catch (error) {
      throw new Error(
        `Error fetching from Bands in Town API: ${error.message}`,
      );
    }
    console.log(
      `\n\n(2) Bands In Town API Response: [${JSON.stringify(bandsInTownAPIResponse)}]`,
    );

    if (!bandsInTownAPIResponse) {
      throw new Error(`ERR: Something went wrong with bandsInTownAPIResponse`);
    }

    console.log("\n\nDONE\n\n");
    //successful data path
    return reply.status(200).send({
      success: true,
      message: "Data received from bandsInTownAPI",
      data: bandsInTownAPIResponse,
    });
  } catch (error) {
    return reply.status(400).send({ error: `Unexpected Error: [${error}]` });
  }
});

// Start the server if we're not in Vercel
if (process.env.NODE_ENV != "production") {
  const start = async () => {
    try {
      await app.listen({ port: PORT });
      console.log(`Server listening on port ${PORT}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };

  start();
}

// For Vercel
export default async function handler(request, response) {
  await app.ready();
  app.server.emit("request", request, response);
}
