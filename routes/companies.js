const express = require('express');
const router = express.Router();

router.get('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;