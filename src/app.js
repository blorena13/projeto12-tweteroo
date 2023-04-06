import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuario = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    const userON = { username, avatar};
    usuario.push(userON);
    res.send("OK");
    console.log(usuario);
})

app.get("/tweets", (req, res) => {

    res.send(tweets);
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const tweetON = { username, tweet };
    tweets.push(tweetON);
    res.send(tweetON);
})



app.listen(5000, () => console.log("servidor rodando no 5000"));