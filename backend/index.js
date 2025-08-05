require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DB = require("./database").connectDB;
DB();

const allowedOrigins = [
  "https://shiftcode-frontend.onrender.com",
  "http://localhost:5173",
  "https://www.shiftcode.org",
  "https://shiftcode.org",
  process.env.DOMAIN_URL, // only if it's actually defined
].filter(Boolean); // removes undefined/null if DOMAIN_URL isn't set

console.log("CORS allowed origins:", allowedOrigins); // helpful for debugging

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS not allowed from origin: ${origin}`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json());


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