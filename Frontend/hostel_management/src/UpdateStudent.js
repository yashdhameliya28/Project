
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddStudent() {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">Enter student name : </div>
                    <div className="col">
                        <input type="text" value={data.studentName} onChange={(e) => {
                            setData({ ...data, studentName: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student rollno : </div>
                    <div className="col">
                        <input type="number" value={data.studentRollNo} onChange={(e) => {
                            setData({ ...data, studentRollNo: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student mobileno : </div>
                    <div className="col">
                        <input type="number" value={data.studentMobileNo} onChange={(e) => {
                            setData({ ...data, studentMobileNo: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student Age : </div>
                    <div className="col">
                        <input type="number" value={data.studentAge} onChange={(e) => {
                            setData({ ...data, studentAge: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter Father name : </div>
                    <div className="col">
                        <input type="text" value={data.studentFatherName} onChange={(e) => {
                            setData({ ...data, studentFatherName: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter Father mobileno : </div>
                    <div className="col">
                        <input type="number" value={data.fatherMobileNo} onChange={(e) => {
                            setData({ ...data, fatherMobileNo: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter Mother name : </div>
                    <div className="col">
                        <input type="text" value={data.studentMotherName} onChange={(e) => {
                            setData({ ...data, studentMotherName: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter Mother mobileno : </div>
                    <div className="col">
                        <input type="number" aria-valuemax={data.motherMobileNo} onChange={(e) => {
                            setData({ ...data, motherMobileNo: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="">
                    <button className="btn" onClick={() => {
                        const apiUrl = "http://localhost:4000/students"
                        fetch(apiUrl, {
                            method: "patch",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/students")
                            })
                    }}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddStudent;