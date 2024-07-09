const express = require("express");
const { products, homeProducts } = require("./data");
const cors = require("cors");
const fs = require("file-system");
const { Router } = require("./routes/authRoutes");
const { connectToDb } = require("./dbConnect");

require("dotenv").config;

const PORT = process.env.PORT || 6060;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.use('/api/user' , authRouter)

app.get("/api/products", (req, res) => {
  res.json({ product: products });
});
app.use("./api/account/login", Router);

app.get("/api/homeProducts", (req, res) => {
  console.log("Sending Home Products");
  res.json({ homeProducts: homeProducts });
});

connectToDb()

app.listen(6060, () => {
  console.log("Server running on PORT : " + PORT);
});
