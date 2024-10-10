const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./Student');

const connectingString = "mongodb+srv://YashDhameliya:y1sh,2805y@cluster001.rbfcj.mongodb.net/Project";

mongoose.connect(connectingString).then(() => {
    console.log("Server is connected with mongoDB")

    const app = express();
    app.use(bodyParser.urlencoded());

    app.get('/students', async (req, res) => {
        const ans = await Student.find();
        res.send(ans);
    })

    app.get('/students/:rollNo', async (req, res) => {
        const ans = await Student.findOne({
            studentRollNo: req.params.rollNo
        })

        res.send(ans);
    })

    app.post('/students/add', async (req, res) => {
        stu = new Student({ ...req.body });
        const ans = await stu.save();
        res.send(ans);
    })

    app.delete('/student/:rollNo', async (req, res) => {
        const ans = await Student.deleteOne({
            studentRollNo: req.params.rollNo
        })

        res.send(ans);
    })

    app.patch('/student/edit/:rollNo', async (req, res) => {
        const stu = await Student.findOne({
            studentRollNo: req.params.rollNo
        })

        stu.studentName = req.body.studentName;
        stu.studentAge = req.body.studentAge;
        stu.studentMobileNo = req.body.studentMobileNo;
        stu.studentFatherName = req.body.studentFatherName;
        stu.fatherMobileNo = req.body.fatherMobileNo;
        stu.studentMotherName = req.body.studentMotherName;
        stu.motherMobileNo = req.body.motherMobileNo;

        const ans = await stu.save();

        res.send(ans);
    })

    app.listen(3001, () => {
        console.log("Server start @ 3001");
    })
})

