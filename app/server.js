const express = require('express');
const app = express();
const fs = require('fs');
app.get('/', (req, res) => {
    res.sendFile("html_page/basic.html",{root:__dirname})
});
app.listen(3000, () => {
    console.log("server is running")
}
);