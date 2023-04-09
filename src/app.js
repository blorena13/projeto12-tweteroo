import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuario = [];
const tweets = [];
let avatar = '';

app.post("/sign-up", (req, res) => {
    const { username, avatar: userAvatar } = req.body;
    avatar = userAvatar;
    const userON = { username, avatar: userAvatar};
    usuario.push(userON);
    res.send("OK");
    console.log(usuario);
})

app.get("/tweets", (req, res) => {
const lastTweet = tweets.slice(-10).map(t => ({ ...t, avatar}));
    res.send(lastTweet);
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    const user = usuario.find(u => u.username === username);
    if(!user){
        res.status(401).send("UNAUTHORIZED");
        return;
    }
    const tweetON = { username, tweet};
    tweets.push(tweetON);
    res.send(tweetON);
})



app.listen(5000, () => console.log("servidor rodando no 5000"));