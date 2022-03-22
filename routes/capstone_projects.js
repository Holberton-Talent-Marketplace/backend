const express = require('express');
const router = express.Router();
const { capstone_projects } = require('../models')

router.get('/capstone_projects', async (req, res) => {
    try {
        const allCapstoneProjects = await capstone_projects.findAll({ include: ['company', 'holbies'] })
        return res.json(allCapstoneProjects)
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/capstone_projects/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const capstoneProjectById = await capstone_projects.findByPk(uuid, { include: ['company', 'holbies'] })
        if (capstoneProjectById) {
            return res.json(capstoneProjectById)
        } else {
            return res.status(404).json({ message: "Capstone Project not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/capstone_projects', async (req, res) => {
    try {
        const { name, description, technologies, holbiesCohort, projectUrl, companyId } = req.body
        const newCapstoneProject = capstone_projects.create({ name, description, technologies, holbiesCohort, projectUrl, companyId: companyId })
        return res.json(newCapstoneProject)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/capstone_projects/:uuid', async (req, res) => {
    const id = req.params.uuid
    try {
        const capstoneProjectById = await capstone_projects.findByPk(id)
        if (capstoneProjectById) {
            const attributes = { name, description, technologies, companyId, holbiesCohort } = req.body
            for (let key in attributes) {
                capstoneProjectById[key] = attributes[key]
            }
            await capstoneProjectById.save()
            return res.json(capstoneProjectById)
        } else {
            return res.status(404).json({ error: "Capstone Project not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/capstone_projects/:uuid', async (req, res) => {
    const id = req.params.uuid
    try {
        const capstoneProjectById = await capstone_projects.findByPk(id)
        if (capstoneProjectById) {
            await capstoneProjectById.destroy()
            return res.json({ message: "Capstone Project destroyed" })
        } else {
            return res.status(404).json({ message: "Capstone Project not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router;