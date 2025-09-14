//This only works for local development

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

app.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

app.get("/api", async (request, reply) => {
  // interface Response {
  // name: string;
  // }

  // const reply = new Response(name = "hello");

  const jsonObject = {
    hello: "world",
  };
  // const reply = JSON.stringify(jsonObject)
  // return res.status(200).type('text').send(reply)
  return reply.header("Content-Type", "application/json").send(jsonObject); // Fastify will handle JSON stringification
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
      console.log(JSON.stringify(result));
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

// let db_request = `INSERT INTO emails_table(uuid, email, created_at) VALUES(gen_random_uuid(), '${email}', current_timestamp()) ON CONFLICT (email) DO NOTHING`;
// let db_request = `INSERT INTO emails_table(uuid, email, created_at) VALUES(gen_random_uuid(), '${email}', current_timestamp()) ON CONFLICT (email) DO NOTHING`;

// if(!email){
//     throw "Error in [addRecordToDB()]: No email passed into function";
// }
// 'use server';
// const sql = neon(import.meta.env.VITE_DATABASE_URL);
// //Three collumns in the database: UUID, Email, timestamp
// //send to db
// try{
//     await sql`${db_request}`;
//     return(true);
// }catch(error){
//     throw(`Error in EmailerSignup.jsx:addRecordToDB(): Sending database request error: [${error.toString()}]`);
// }
