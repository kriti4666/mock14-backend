const express = require("express");
const app = express.Router();
const Score = require("../models/score.model");

app.get("/", async (req, res) => {
    const score = await Score.find().limit(10);
    return res.send({ "Scores": score, "msg": "hello" })
})

app.get('/getword', (req, res) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function genrateRandomWords(len) {
        let ans = '';
        const charLength = characters.length;
        for (let i = 0; i <len; i++) {
            ans += characters.charAt(Math.floor(Math.random() * charLength))
        }

        return ans;
    }

    let len = Math.floor(Math.random() * (10 - 7) + 7)

    let out = genrateRandomWords(len)

    res.send({ "string": out.toLocaleLowerCase(), "msg": "Here is your random word" })
})

app.post("/", async (req, res) => {

    const { name, level, score } = req.body

    const new_score = new Score({
        name,
        score,
        level
    })
    await new_score.save()

    res.send({ new_score })

})

module.exports = app;