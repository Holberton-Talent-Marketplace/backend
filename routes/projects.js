const express = require('express');
const router = express.Router();

router.get('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint post projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint put projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint delete projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;