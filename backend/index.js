const express = require('express');
const app = express();
const cors = require('cors');
const DB = require("./database").connectDB;

require('dotenv').config();
DB();
app.use(cors(
    {origin: 'http://localhost:3002',  // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true 
    }
));

app.use(express.json());

//add routes here


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});