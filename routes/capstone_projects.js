const express = require('express');
const router = express.Router();

router.get('/capstone_projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET capstone_projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/capstone_projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint post capstone_projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/capstone_projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint put capstone_projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/capstone_projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint delete capstone_projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;