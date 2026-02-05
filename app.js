const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const connectDB = require('./db');

const employeeRoutes = require('./routes/employeeRoutes');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', employeeRoutes);
connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});