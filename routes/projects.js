const express = require('express');
const router = express.Router();
const {projects, holbie} = require('../models');

router.get('/projects', async (req, res) => {
    try {
        const allProjects = await projects.findAll({ include: 'holbie' })
        return res.json(allProjects)
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/projects/:id', async (req, res) => {
    const id = req.params.id
    try {
        const projectsById = await projects.findByPk(id, { include: 'holbie' })
        if (projectsById) {
            return res.json(projectsById)
        } else {
            return res.status(404).json({ message: "projects not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/projects', async (req, res) => {
    try {
        const { name, technologiesUsed, description, linkToProject } = req.body
        const id = req.body.holbieId
        const holbieById = await holbie.findByPk(id)
        if (holbieById) {
            console.log("Holbie found")
            console.log({ name, technologiesUsed, description, linkToProject,  })
            const newProjects = await projects.create({ name, technologiesUsed, description, linkToProject, holbieId: holbieById.id })
            return res.json(newProjects)
        } else {
            return res.status(404).json({ error: "holbie not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.put('/projects/:id', async (req, res) => {
    const id = req.params.id
    try {
        const project = await projects.findByPk(id)
        if (project) {
            const attributes = { name, technologiesUsed, description, linkToProject, holbieId } = req.body
            for (let key in attributes) {
                project[key] = attributes[key]
            }
            await project.save()
            return res.json(project)
        } else {
            return res.status(404).json({ error: "project not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/projects/:id', async (req, res) => {
    const id = req.params.id
    try {
        const projectById = await projects.findByPk(id)
        if (projectById) {
            await projectById.destroy()
            return res.json({ message: "project destroyed" })
        } else {
            return res.status(404).json({ message: "project not found" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router;