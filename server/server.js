const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2yibig1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
