const express = require('express');
const app = express();
const cors = require('cors');
const DB = require("./database").connectDB;
require('dotenv').config();

const domainURL = process.env.DOMAIN_URL

DB();
app.use(cors(
    {origin: domainURL,  // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true 
    }
));

app.use(express.json());

const companyRoutes = require('./routes/companyRoutes')
const jobRoutes = require('./routes/jobRoutes')
const newsRoutes = require('./routes/newsRoutes')
const projectsRoutes = require('./routes/projectRoutes')
const requestsRoutes = require('./routes/requestsRoutes')
const servicesRoutes = require('./routes/servicesRoutes')
const teamRoutes = require('./routes/teamRoutes')

app.use(`/api/${process.env.API_VERSION}/company`,companyRoutes);
app.use(`/api/${process.env.API_VERSION}/job`, jobRoutes);
app.use(`/api/${process.env.API_VERSION}/news`, newsRoutes);
app.use(`/api/${process.env.API_VERSION}/projects`, projectsRoutes);
app.use(`/api/${process.env.API_VERSION}/requests`, requestsRoutes);
app.use(`/api/${process.env.API_VERSION}/services`, servicesRoutes);
app.use(`/api/${process.env.API_VERSION}/team`, teamRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});