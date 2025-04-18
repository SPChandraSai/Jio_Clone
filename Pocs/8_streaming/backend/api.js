const express = require('express');
const app = express();
const fs = require('fs');
const cors = require("cors");
app.use(cors());

app.get("/memoryIntensive", function (req, res) {
    console.log("reading the content -> SSD -> RAM");
    const fileContent = fs.readFileSync("Amreen 1.0.fig.zip");
    console.log("content read finished");
    res.send(fileContent);
})

app.get("/streamfile", function (req, res) {
    console.log("file readStream created");
    // const fileStreamInstance = fs.createReadStream("Amreen 1.0.fig.zip");
    const videoStreamInstance = fs.createReadStream("Tom And Jerry Tales - S02 E01")
    // fileStreamInstance.pipe(res);
    res.writeHead(200, {
        "content-type": "video/mp4"
    })
    videoStreamInstance.pipe(res);
})

app.listen(3000, function () {
    console.log("server is running at port 3000");
})