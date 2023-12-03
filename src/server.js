// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8081;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const conn_str =
  "mongodb+srv://jodhiparson:CNfezWoagOUtO1PN@cluster0.blqsh2k.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

mongoose.connect(conn_str, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => {
    console.log("MongoDB Connection Succeeded @ localhost:8081");
  })
  .on("error", (error) => {
    console.log(`Error in DB Connection: ${error}`);
  });

// Define your routes (e.g., items and users)
const items = require('./routes/api/items');
const users = require('./routes/api/users');
app.use('/api/items', items);
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
