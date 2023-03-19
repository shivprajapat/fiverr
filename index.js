const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const port = env.PORT || 8800;

// database connection
connect();

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Welcome to Fiverr App</h1>"));

app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
