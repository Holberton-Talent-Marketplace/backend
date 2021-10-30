const express = require('express');
const router = express.Router();
const { holbie, experience } = require('../models')
const validate = require('uuid-validate');
const fs = require('fs');


const nullable = ["location", "most_amazing_thing", "industries", "github"]

router.get('/holbies', async (req, res) => {
    try {
        const allHolbies = await holbie.findAll({ include: ['experiences', 'projects', 'capstoneProjects'] })
        return res.json(allHolbies)

    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findByPk(uuid, { include: ['experiences', 'projects', 'capstoneProjects'] })
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
        return res.status(500).json(err)
    }
})

router.post('/holbies', async (req, res) => {
    try {
        const capId = req.body.capstoneProjectId
        const { gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github } = req.body
        const newHolbie = await holbie.create({ gender, name, about_me, location, most_amazing_thing, technologies, industries, linkedin, github, capstoneProjectId: capId })
        if (req.files) {
            console.log(req.files[0].buffer)
            fs.writeFile(`../../Techstars Project/frontend/holberton_talent_marketplace/src/profile_pitures/${newHolbie.id}.png`, req.files[0].buffer, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        }
        return res.json(newHolbie)
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.put('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const attributes = { gender, name, about_me, location, strengths, skills, most_amazing_thing, previous_education, technologies, industries, linkedin, github, capstoneProjectId } = req.body
        console.log(attributes)
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findByPk(uuid)
            if (holbieById == null) {
                return res.status(404).json({ message: "holbie not found" })
            } else {

                for (let key in attributes) {
                    holbieById[key] = attributes[key]
                }
                await holbieById.save()
                return res.json(holbieById)
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }

    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/holbies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const holbieById = await holbie.findByPk(uuid)
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
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router;