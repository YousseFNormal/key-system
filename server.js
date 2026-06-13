const express = require("express");
const app = express();

app.use(express.json());

const keys = [
    "YOUSEF123",
    "VIP2026"
];

app.get("/", (req, res) => {
    res.send("Key System Online");
});

app.post("/check", (req, res) => {
    const { key } = req.body;

    res.json({
        valid: keys.includes(key)
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Running");
});
