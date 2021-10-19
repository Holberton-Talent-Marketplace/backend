const express = require('express');
const app = express()
const { sequelize } = require('./models');

app.use(express.json())

// holbies endpoints
app.use('/', require('./routes/holbies'))

// projects endpoints
app.use('/', require('./routes/projects'))

// capstone projects endpoints
app.use('/', require('./routes/capstone_projects'))

// companies endpoints
app.use('/', require('./routes/companies'))

// recruiters endpoints
app.use('/', require('./routes/recruiters'))

// holbieList endpoint
app.use('/', require('./routes/holbie_list'))

app.listen({ port: 5000}, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Connected to database: htm_database')
})
