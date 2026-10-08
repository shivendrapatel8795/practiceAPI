import express from "express"

const app = express()

app.get("/shiv", (req, res) => {
    res.send("hello")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});