require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DB = require("./database").connectDB;

const domainURL = process.env.DOMAIN_URL

DB();
app.use(cors(
    {origin: domainURL,  // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true 
    }
));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

const companyRoutes = require('./routes/companyRoutes')
const jobRoutes = require('./routes/jobRoutes')
const newsRoutes = require('./routes/newsRoutes')
const projectsRoutes = require('./routes/projectRoutes')
const requestsRoutes = require('./routes/requestsRoutes')
const servicesRoutes = require('./routes/servicesRoutes')
const teamRoutes = require('./routes/teamRoutes')

app.use(`/api/v1/company`,companyRoutes);
app.use(`/api/v1/job`, jobRoutes);
app.use(`/api/v1/news`, newsRoutes);
app.use(`/api/v1/projects`, projectsRoutes);
app.use(`/api/v1/requests`, requestsRoutes);
app.use(`/api/v1/services`, servicesRoutes);
app.use(`/api/v1/team`, teamRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});