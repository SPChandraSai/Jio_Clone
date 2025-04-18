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
    const videoStreamInstance = fs.createReadStream("video1")
    // fileStreamInstance.pipe(res);
    res.writeHead(200, {
        "content-type": "video/mp4"
    })
    videoStreamInstance.pipe(res);
})

app.get("/rangestreaming", function (req, res) {
    // get the range from the request header -> video player
    const range = req.headers.range;
    if (range) {
        const stat = fs.statSync("video1.mp4");
        const fileSize = stat.size;
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunkSize = 10 ** 6; // 1MB
        // console.log("chunk size", chunkSize);
        const header = {
            "Content-Type": "video/mp4",
            "Content-Length": chunkSize,
            "Accept-Ranges": "bytes",
            "Content-range": `bytes ${start}-${end}/${fileSize}`
        }
        // send a 206 partial content status
        res.writeHead(206, header);
        // create a read stream for the video file
        const file = fs.createReadStream("video1.mp4", { start, end });
        // pipe the file stream to the response
        file.pipe(res);
    }
    else {
        req.status(400).json({
            message: "Invalid request"
        })
    }
})

app.listen(3000, function () {
    console.log("server is running at port 3000");
})