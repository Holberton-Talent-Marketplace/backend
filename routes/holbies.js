const express = require('express');
const router = express.Router();


router.get('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint put holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint delete holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;