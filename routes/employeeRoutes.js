const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModels');


// Home – list all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render('home', { employees });
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add page
router.get('/add', (req, res) => {
  res.render('add');
});

// Add employee
router.post('/add', async (req, res) => {
  await Employee.create(req.body);
  res.redirect('/');
});

// Edit page
router.get('/edit/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render('edit', { employee });
});

// Update employee
router.post('/update/:id', async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});

// Delete employee
router.get('/delete/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
