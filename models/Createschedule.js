const mongoose = require('mongoose');

const createscheduleSchema = new mongoose.Schema({
  name: String
});

const Createschedule = mongoose.model('Createschedule', createscheduleSchema);
module.exports = Createschedule;
