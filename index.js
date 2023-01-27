require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");


const PORT = process.env.PORT;
const ScoreRoutes = require("./src/routes/score.route")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({message: "Hello User"});
});

app.use("/score", ScoreRoutes);

app.listen(PORT, async () => {
    await connectDB();
  console.log(`Listening to http://localhost:${PORT}`);
});