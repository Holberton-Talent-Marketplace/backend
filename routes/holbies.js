const express = require('express');
const router = express.Router();
const { holbie } = require('../models')
const validate = require('uuid-validate');


router.get('/holbies', async (req, res) => {
    try {
        const allHolbies = await holbie.findAll()
        return res.json(allHolbies)

    } catch (err) {
        console.error(err)
    }
})

router.get('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findOne({ where: { uuid } })
            if (holbieById == null) {
                return res.status(404).json({ message: "holbie not found" })
            } else {
                return res.json(holbieById)
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }
    } catch (err) {
        console.error(err)
    }
})

router.post('/holbies', async (req, res) => {
    try {
        const { gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github } = req.body
        const newHolbie = await holbie.create({ gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github })
        return res.json(newHolbie)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findOne({ where: { uuid } })
            if (holbieById == null) {
                return res.status(404).json({ message: "holbie not found" })
            } else {
                const attributes = { gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github } = req.body
                for (let key in attributes) {
                    if (attributes[key]) {
                        holbieById[key] = attributes[key]
                    }
                }
                return res.json(holbieById)
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }

    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findOne({ where: { uuid } })
            if (holbieById == null) {
                return res.status(404).json({ message: "holbie not found" })
            } else {
                await holbieById.destroy()
                return res.status(200).json({ message: "Holbie destroyed" })
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;