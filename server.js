const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
// const connectDB = require('./db/Connection')
const app = express();

// connectDB();
const Port = process.env.Port || 3000;

const connectionString = process.env.ATLAS_URI;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDb connection established successfully');
});

app.listen(Port,() => console.log('Server started'));