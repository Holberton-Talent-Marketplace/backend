const express = require('express');
const router = express.Router();
const { companies } = require('../models')
const validate = require('uuid-validate')

const nullable = ["location", "contact_link"]

router.get('/companies', async (req, res) => {
    try {
        const allCompanies = await companies.findAll()
        return res.json(allCompanies)
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/companies/:uuid', async (req, res) => {
    try {
        const uuid = req.params.uuid;
        if (validate(uuid, 4)) {
            const company = await companies.findByPk(uuid)
            if (company == null) {
                return res.status(404).json({ message: "company not found" })
            } else {
                return res.json(company)
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/companies', async (req, res) => {
    try {
        const { name, about_us, location, technologies, contact_link } = req.body
        const newCompany = await companies.create({ name, about_us, location, technologies, contact_link })
        return res.json(newCompany)
    } catch (err) {
        if (err.errors[0].message) {
            return res.status(400).json({ message: `${err.errors[0].message}` })
        }
        console.error(err)
        return res.status(500).json(err)
    }
})

router.put('/companies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const notNullableAttributes = { name, about_us, location, technologies, contact_link } = req.body
        nullable.forEach(element => delete notNullableAttributes[element])
        console.log(notNullableAttributes)
        for (let att in notNullableAttributes) {
            if (notNullableAttributes[att] == null) {
                return res.status(400).json({ message: `${att} cannot be null` })
            } else if (notNullableAttributes[att] === "") {
                return res.status(400).json({ message: `${att} cannot be empty` })
            }
        }
        if (validate(uuid, 4)) {
            const company = await companies.findByPk(uuid)
            if (company == null) {
                return res.status(404).json({ message: "company not found" })
            } else {
                const attributes = { name, about_us, location, technologies, contact_link } = req.body
                for (let key in attributes) {
                    company[key] = attributes[key]
                }
                await company.save()
                return res.json(company)
            }
        } else {
            return res.status(400).json({ message: "uuid not valid" })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

router.delete('/companies/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        if (validate(uuid, 4)) {
            const company = await companies.findByPk(uuid)
            if (company == null) {
                return res.status(404).json({ message: "company not found" })
            } else {
                await company.destroy()
                return res.json({ message: "The company has been deleted" })
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