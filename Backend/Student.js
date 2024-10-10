const mongoose = require('mongoose');

const schema = mongoose.Schema({
    studentRollNo: Number,
    studentName: String,
    studentAge: Number,
    studentMobileNo: Number,
    studentFatherName: String,
    fatherMobileNo: Number,
    studentMotherName: String,
    motherMobileNo: Number
})

module.exports = mongoose.model('Student' , schema , 'Students');