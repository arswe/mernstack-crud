const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const port = process.env.PORT || 5000;

const app = express();

app.listen(process.env.PORT, () => {
  console.log(colors.rainbow(`Server is running on port http://localhost:${process.env.PORT}`));
});
