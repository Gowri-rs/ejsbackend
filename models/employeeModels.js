const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true
  },
  employeeDesignation: {
    type: String,
    required: true
  },
  employeeLocation: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
