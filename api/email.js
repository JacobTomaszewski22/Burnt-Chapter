import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import { neon } from "@neondatabase/serverless";

const app = Fastify({
  logger: true,
});

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//now we need to setup the neon database object
const sql = neon(process.env.DATABASE_URL);
console.log(`SQL URL: [${process.env.DATABASE_URL}]`);

app.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

//Setting up the post root
app.post("/api/email", async (request, reply) => {
  try {
    //TO DO: Should make this work \/
    console.log(
      `New POST Request:\n Header: [${toString(request.headers)}],\n Body: [${toString(request.body)}]`,
    );
    //check if the request has an accessible body
    if (!request.body) {
      return reply
        .status(400)
        .send({ error: `No body found: [${request.body}]` });
    }

    //check if the request has a key of email
    if (!request.body.email) {
      return reply
        .status(400)
        .send({ error: `No key of ['email'] found: [${request.body}]` });
    }

    const email = request.body.email;

    //need to assert that the content of the request is the email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return reply
        .status(400)
        .send({ error: `Invalid email provided:[ ${email}]` });
    }
    console.log(`Email recieved: ${email}`);

    //Communicating with the neon database
    try {
      const result =
        await sql`INSERT INTO email_table(id, email, created_at) VALUES(gen_random_uuid(), ${email}, current_timestamp) ON CONFLICT (email) DO NOTHING`;
      // await sql`INSERT INTO email_table(id, email, created_at) VALUES(gen_random_uuid(), '${email}', current_timestamp) ON CONFLICT (email) DO NOTHING`;
      console.log(`Result Returned From SQL: [ ${JSON.stringify(result)} ]`);
      if (!result) {
        console.log(`No Result Returned...`);
      }
    } catch (error) {
      console.error(
        `Error with sending INSERT request to database:\n\tError: [${error}]`,
      );
    }

    //successful data path
    return reply
      .status(200)
      .send({ success: true, message: "Email received", email });
  } catch (error) {
    console.error("Error processing email:", error);
    return reply.status(500).send({ error: error.message });
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
