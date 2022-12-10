import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API running on ${PORT}`);
});

app.get("/", (req,res) => {
    res.json("My API is running.");
});