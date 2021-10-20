const express = require('express');
const router = express.Router();
const {companies} = require('../models')

router.get('/companies', async (req, res) => {
    try {
        const allCompanies = await companies.findAll()
        return res.json(allCompanies)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/companies/:uuid', async (req, res) => {
    try {
        const uuid = req.params.uuid;
        const company = await companies.findOne({where: {uuid}})
        return res.json(company)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.post('/companies', async (req, res) => {
    try {
        const {name,about_us,location,technologies,contact_link} = req.body
        const newCompany = await companies.create({name,about_us,location,technologies,contact_link})
        return res.json(newCompany)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/companies/:uuid', async (req, res) => {
    try {
        const {name,about_us,location,technologies,contact_link} = req.body
        const uuid = req.params.uuid;
        const company = await companies.findOne({where: {uuid}})
        company.name = name
        company.about_us = about_us
        company.location = location
        company.technologies = technologies
        company.contact_link = contact_link
        await company.save()
        return res.json(company)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/companies/:uuid', async (req, res) => {
    try {
        const uuid = req.params.uuid;
        const company = await companies.findOne({where: {uuid}})
        await company.destroy()
        return res.json({ message: "The company has been deleted"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;