const express = require("express");
const dbConnect = require("./config/dbConnect");
const usersRoute = require("./routes/users");
const dotenv = require("dotenv").config();

const app = express();

app.use("/api/users", usersRoute);

app.get("/api", (req, res) => {
  res.send("This is postmem API");
});

const PORT = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
  })
  .catch((err) => console.log(err.message));
