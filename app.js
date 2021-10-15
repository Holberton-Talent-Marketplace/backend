const express = require('express');
const holbiesRoute = require('./routes/holbies')
const app = express()
app.use(express.json())

// holbies endpoints

app.get('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.post('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.put('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint put holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.delete('/holbies', async (req, res) => {
    try {
        return res.json({ message: "endpoint delete holbies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

// projects endpoints
app.get('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.post('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint post projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.put('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint put projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.delete('/projects', async (req, res) => {
    try {
        return res.json({ message: "endpoint delete projects"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

// companies endpoints
app.get('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.post('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.put('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.delete('/companies', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE companies"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

// recruiters endpoints
app.get('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.post('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.put('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.delete('/recruiters', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE recruiters"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

// holbieList endpoint
app.get('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint GET holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.post('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint POST holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.put('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint PUT holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.delete('/holbie_list', async (req, res) => {
    try {
        return res.json({ message: "endpoint DELETE holbie list"})
    } catch (err) {
        return res.status(500).json(err)
    }
})

app.listen({ port: 5000}, async () => {
    console.log('Server up on http://localhost:5000')

    console.log('Database connected!')
})