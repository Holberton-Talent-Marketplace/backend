const express = require('express');
const router = express.Router();

router.get('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;