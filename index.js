const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { status } = require("./helper/api.responses");

const port = env.PORT || 8800;

const app = express();
// database connection
connect();
app.use(
  cors({
    origin: port,
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: "true",
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/gigs", require("./routes/gigRoute"));
app.use("/api/orders", require("./routes/orderRoute"));
app.use("/api/conversations", require("./routes/conversationRoute"));
app.use("/api/messages", require("./routes/messageRoute"));
app.use("/api/reviews", require("./routes/reviewRoute"));

app.use((err, req, res, next) => {
  const errorStatus = err.status || status.InternalServerError;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.get("/", (req, res) =>
  res.send("<h1 style='font-family:sans-serif'>Welcome to Fiverr App</h1>")
);

app.listen(port, () => {
  console.log(`Backend server is running! ${env.NODE_ENV}`);
});
