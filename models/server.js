require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');

const app = express();

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(bodyParser.json());

connectDB()
  .then(() => {
    console.log('MongoDB connected...');

    // Define API endpoints here
    
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
