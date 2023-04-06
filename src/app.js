import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/teste", (req, res) => {
    res.send("deu certo carai");
})

app.post("/testando", (req, res)=> {
    res.send("postouuuuu");
})



app.listen(5000, ()=> console.log("servidor rodando no 5000"));