const express = require('express');
const router = express.Router();
const { holbie } = require('../models')


router.get('/holbies', async (req, res) => {
    try {
        const allHolbies = await holbie.findAll()
        return res.json(allHolbies)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const holbieById = await holbie.findOne({
            where: { uuid }
        })
        return res.json(holbieById)
    } catch (err) {
        return res.status(500).json(err)
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
        const holbieById = await holbie.findOne({
            where: { uuid }
        })
        const { gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github } = req.body

        holbieById.gender = gender
        holbieById.name = name
        holbieById.about_me = about_me
        holbieById.location = location
        holbieById.most_amazing_thing = most_amazing_thing
        holbieById.technologies = technologies
        holbieById.industries = industries
        holbieById.linkedin = linkedin
        holbieById.github = github
        return res.json(holbieById)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const holbieById = await holbie.findOne({
            where: { uuid }
        })
        await holbieById.destroy()
        return res.json({ message: "Holbie destroyed" })
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;