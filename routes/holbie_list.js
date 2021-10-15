const express = require('express');
const router = express.Router();

router.get('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;