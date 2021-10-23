const express = require('express');
const router = express.Router();
const { holbie, experience } = require('../models')

router.get('/experiences', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET /experiences"})
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/experiences', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST /experiences"})
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.put('/experiences', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT /experiences"})
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/experiences', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE /experiences"})
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router;