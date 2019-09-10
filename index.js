const express = require("express");
const CarRoute = require("./routes/CarRoute");
const app = express();

const PORT = process.env.PORT || 4000;

//* Middleware
app.use(express.json());

//* Routes
app.use("/api/cars", CarRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT} ...`)
);
