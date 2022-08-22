import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from stream");
});

app.listen(port, () => {
  console.log(`stream listening at http://localhost:${port}`);
});
