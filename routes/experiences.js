const express = require('express')
const router = express.Router()
const { holbie, experience } = require("../models")

router.get('/experiences', async (req, res) => {
    try {
        const allExperiences = await experience.findAll({ include: 'holbie' })
        return res.json(allExperiences)

    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/experiences/:id', async (req, res) => {
    const id = req.params.id
    try {
        const experienceById = await experience.findByPk(id, { include: 'holbie' })
        if (experienceById) {
            return res.json(experienceById)
        } else {
            return res.status(404).json({ message: "experience not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/experiences', async (req, res) => {
    try {
        const { name, description, companyName } = req.body
        const id = req.body.holbieId
        const holbieById = await holbie.findByPk(id)
        if (holbieById) {
            console.log("Holbie found")
            console.log({ name, description, companyName })
            const newExperience = await experience.create({ name, description, companyName, holbieId: holbieById.id })
            return res.json(newExperience)
        } else {
            return res.status(404).json({ error: "holbie not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.put('/experiences/:id', async (req, res) => {
    const id = req.params.id
    try {
        const experienceById = await experience.findByPk(id)
        if (experienceById) {
            const attributes = { name, description, companyName, holbieId } = req.body
            for (let key in attributes) {
                experienceById[key] = attributes[key]
            }
            await experienceById.save()
            return res.json(experienceById)
        } else {
            return res.status(404).json({ error: "Experience not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/experiences/:id', async (req, res) => {
    const id = req.params.id
    try {
        const experienceById = await experience.findByPk(id)
        if (experienceById) {
            await experienceById.destroy()
            return res.json({ message: "experience destroyed" })
        } else {
            return res.status(404).json({ message: "experience not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router;