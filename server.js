// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const scheduleRouter = require('./routes/schedule');
app.use('/api', scheduleRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
