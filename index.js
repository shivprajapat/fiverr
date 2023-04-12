const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");

const port = env.PORT || 8800;

const app = express();
// database connection
connect();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/gigs", require("./routes/gigRoute"));
app.use("/api/orders", require("./routes/orderRoute"));
app.use("/api/conversations", require("./routes/conversationRoute"));
app.use("/api/messages", require("./routes/messageRoute"));
app.use("/api/reviews", require("./routes/reviewRoute"));

app.get("/", (req, res) =>
  res.send("<h1 style='font-family:sans-serif'>Welcome to Fiverr App</h1>")
);

app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
