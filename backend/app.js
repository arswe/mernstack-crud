const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./database/db');

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(colors.cyan.bold(`Server is running on port http://localhost:${port}`));
});
