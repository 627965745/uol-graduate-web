import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

const StudentTable = () => {
    let navigate  = useNavigate ();
    const [students, setStudents] = useState([
        {
            id: 1,
            first_name: "Bern",
            last_name: "Oleszczak",
            title: "Mr",
            email: "boleszczak0@test.com",
            dob: "24/12/2000",
            subjects: ["Biology", "Chemistry"],
        },
        {
            id: 2,
            first_name: "Daria",
            last_name: "Innocenti",
            title: "Ms",
            email: "dinnocenti1@test.com",
            dob: "1/9/2000",
            subjects: ["History", "Geography"],
        },
        {
            id: 3,
            first_name: "Thorstein",
            last_name: "Cicchetto",
            title: "Honorable",
            email: "tcicchetto2@test.com",
            dob: "6/9/2002",
            subjects: ["Physics"],
        },
        {
            id: 4,
            first_name: "Georgianna",
            last_name: "Brafield",
            title: "Honorable",
            email: "gbrafield3@test.com",
            dob: "16/07/2002",
            subjects: ["Biology", "Geography"],
        },
        {
            id: 5,
            first_name: "Bryanty",
            last_name: "Breche",
            title: "Dr",
            email: "bbreche4@test.com",
            dob: "23/10/2001",
            subjects: ["History"],
        },
        {
            id: 6,
            first_name: "Murvyn",
            last_name: "Birchall",
            title: "Rev",
            email: "mbirchall5@test.com",
            dob: "8/11/2002",
            subjects: ["Geography"],
        },
        {
            id: 7,
            first_name: "Sherline",
            last_name: "McNysche",
            title: "Honorable",
            email: "smcnysche6@test.com",
            dob: "28/02/2000",
            subjects: ["Geography"],
        },
        {
            id: 8,
            first_name: "Dukie",
            last_name: "Neely",
            title: "Honorable",
            email: "dneely7@test.com",
            dob: "18/06/2000",
            subjects: ["Physics", "Biology"],
        },
        {
            id: 9,
            first_name: "Mil",
            last_name: "Udie",
            title: "Honorable",
            email: "mudie8@test.com",
            dob: "7/6/2002",
            subjects: ["History"],
        },
        {
            id: 10,
            first_name: "Tiffany",
            last_name: "Philpot",
            title: "Dr",
            email: "tphilpot9@test.com",
            dob: "12/11/2002",
            subjects: ["Chemistry", "Biology"],
        },
        {
            id: 11,
            first_name: "Elga",
            last_name: "Braim",
            title: "Rev",
            email: "ebraima@test.com",
            dob: "14/05/2002",
            subjects: ["Physics"],
        },
        {
            id: 12,
            first_name: "Zara",
            last_name: "Benettelli",
            title: "Mr",
            email: "zbenettellib@test.com",
            dob: "7/11/2001",
            subjects: ["Biology"],
        },
        {
            id: 13,
            first_name: "Emogene",
            last_name: "Romera",
            title: "Ms",
            email: "eromerac@test.com",
            dob: "28/01/2002",
            subjects: ["Geography", "Physics"],
        },
        {
            id: 14,
            first_name: "Bail",
            last_name: "Reuble",
            title: "Ms",
            email: "breubled@test.com",
            dob: "27/10/2003",
            subjects: ["Biology"],
        },
        {
            id: 15,
            first_name: "Borden",
            last_name: "Igoe",
            title: "Rev",
            email: "bigoee@test.com",
            dob: "26/06/2003",
            subjects: ["Geography"],
        },
        {
            id: 16,
            first_name: "Essy",
            last_name: "Nation",
            title: "Dr",
            email: "enationf@test.com",
            dob: "28/05/2001",
            subjects: ["Biology", "Chemistry"],
        },
        {
            id: 17,
            first_name: "Arch",
            last_name: "Kitchen",
            title: "Honorable",
            email: "akitcheng@test.com",
            dob: "26/01/2000",
            subjects: ["Chemistry", "History"],
        },
        {
            id: 18,
            first_name: "Elle",
            last_name: "Beagrie",
            title: "Dr",
            email: "ebeagrieh@test.com",
            dob: "7/1/2002",
            subjects: ["Physics", "Geography"],
        },
        {
            id: 19,
            first_name: "Brietta",
            last_name: "Pietzker",
            title: "Rev",
            email: "bpietzkeri@test.com",
            dob: "11/9/2002",
            subjects: ["Chemistry"],
        },
        {
            id: 20,
            first_name: "Dar",
            last_name: "Mallan",
            title: "Honorable",
            email: "dmallanj@test.com",
            dob: "31/03/2001",
            subjects: ["Chemistry", "History"],
        },
    ]);
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Student List</h1>
                <button type="button" className="btn btn-primary" onClick={() => {navigate('/addstudent')}}>
                    Add Student
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.title}</td>
                            <td>{student.email}</td>
                            <td>{student.subjects.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
