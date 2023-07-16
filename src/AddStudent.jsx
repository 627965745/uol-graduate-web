import React, { useState } from "react";

const AddStudent = () => {
    const [newStudent, setNewStudent] = useState({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        dob: "",
        subjects: [],
    });

    const handleChange = (e) => {
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            if (newStudent.subjects.length < 2) {
                setNewStudent({
                    ...newStudent,
                    subjects: [...newStudent.subjects, e.target.value],
                });
            } else {
                e.target.checked = false;
            }
        } else {
            setNewStudent({
                ...newStudent,
                subjects: newStudent.subjects.filter(
                    (subject) => subject !== e.target.value
                ),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newStudent);
    };

    return (
        <div className="container w-50">
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        placeholder="First Name"
                        maxLength="25"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        placeholder="Surname"
                        maxLength="25"
                        required
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="form-select"
                        name="title"
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Select Title--</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Honorable">Honorable</option>
                        <option value="Rev">Rev</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        maxLength="50"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-1">
                    <label>Select up to 2 Subjects</label>
                </div>
                <div className="d-flex-wrap justify-content-between mb-3">
                    <label className="me-2">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Biology"
                            className="me-2"
                            onChange={handleCheckboxChange}
                        />
                        Biology
                    </label>
                    <label className="me-2">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Chemistry"
                            className="me-2"
                            onChange={handleCheckboxChange}
                        />
                        Chemistry
                    </label>
                    <label className="me-2">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Physics"
                            className="me-2"
                            onChange={handleCheckboxChange}
                        />
                        Physics
                    </label>
                    <label className="me-2">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="History"
                            className="me-2"
                            onChange={handleCheckboxChange}
                        />
                        History
                    </label>
                    <label className="me-2">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Geography"
                            className="me-2"
                            onChange={handleCheckboxChange}
                        />
                        Geography
                    </label>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Add Student
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
