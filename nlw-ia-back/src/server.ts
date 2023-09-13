import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello from API!";
});

app
  .listen({
    port: 3333,
  })
  .then((v) => {
    console.log("Server running at:", v);
  })
  .catch((err) => {
    console.log(err);
  });
