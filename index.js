import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// __________________________________________________________________________________________________________

app.get("/", (req, res) => {
  res.send("Code is running");
});

// __________________________________________________________________________________________________________

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
