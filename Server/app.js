require("dotenv").config();
const express = require("express");
const app = express();

const port = 8005;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});