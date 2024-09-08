const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        message: "Hey! From Backend"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});