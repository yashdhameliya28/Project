
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function GetStudentByID() {
    const [data, setData] = useState({});
    const { rollno } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const apiUrl = "http://localhost:3001/students/" + rollno;
        fetch(apiUrl, { method: "get" })
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <>
            <table>
                <Link to='/students' className="btn">Back</Link>
                <tr>
                    <td>Student rollno :</td>
                    <td>{data.studentRollNo}</td>
                </tr>
                <tr>
                    <td>Student name : </td>
                    <td>{data.studentName}</td>
                </tr>
                <tr>
                    <td>Studenr Age : </td>
                    <td>{data.studentAge}</td>
                </tr>

                <tr>
                    <td>Student mobileno : </td>
                    <td>{data.studentMobileNo}</td>
                </tr>
                <tr>
                    <td>Father name : </td>
                    <td>{data.studentFatherName}</td>
                </tr>
                <tr>
                    <td>Father mobileno : </td>
                    <td>{data.mobile}</td>
                </tr>
                <tr>
                    <td>Mother name : </td>
                    <td>{data.studentMotherName}</td>
                </tr>
                <tr>
                    <td>Mother mobileno : </td>
                    <td>{data.motherMobileNo}</td>
                </tr>


            </table>

            <button className="btn" onClick={() => {
                const apiUrl = "http://localhost:3001/students/" + rollno;
                fetch(apiUrl, { method: "delete" })
                    .then(res => res.json())
                    .then(res => {
                        navigate("/students")
                    })

            }}></button>
        </>
    )

}

export default GetStudentByID;