// routes/schedule.js
const express = require('express');
const router = express.Router();

// Placeholder schedule data
const schedule = [
    { date: '2024-07-01', opponent: 'Lakers', result: 'Win' },
    { date: '2024-07-03', opponent: 'Heat', result: 'Loss' },
    // Add more schedule entries as needed
];

router.get('/schedule', (req, res) => {
    res.json(schedule);
});

module.exports = router;
