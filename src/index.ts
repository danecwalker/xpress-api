import express, { Express, Request, Response } from "express";
import { createServer, Server } from "http";

const app: Express = express();
const server: Server = createServer(app);
const port: string | number = process.env.PORT ?? 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from stream");
});

server.listen(port, () => {
  console.log(`stream listening at http://localhost:${port}`);
});
