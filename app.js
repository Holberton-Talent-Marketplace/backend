const express = require('express');
const app = express()
const { sequelize } = require('./models');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');

app.use(express.json())

const spec = path.join(__dirname, 'api.yaml');
app.use('/spec', express.static(spec));
/** */
app.use(
    OpenApiValidator.middleware({
      apiSpec: './api.yaml',
      validateRequests: true
    }),
  );

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

// experiences endopoint
app.use('/', require('./routes/experiences'))

app.use((err, req, res, next) => {
    // 7. Customize errors
    console.error(err); // dump error to console for debug
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

app.listen({ port: 5000}, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Connected to database: htm_database')
})
