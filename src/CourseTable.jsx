import React, { useEffect, useState } from "react";
import courseList from "./courses.json";

const CourseTable = () => {
    // if the json is from remote
    // const [courseList, setCourseList] = useState([{}]);
    // const getCourseList = async () => {
    //     fetch("https://www.liverpool.ac.uk/app-data/study-abroad/courses.json")
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setCourseList(responseJson)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    // useEffect(() => {
    //     getCourseList();
    // }, []);
    const [activeCourse, setActiveCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(courseList);
    const toggleUniversities = (index) => {
        if (activeCourse === index) {
            setActiveCourse(null);
        } else {
            setActiveCourse(index);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setFilteredCourses(
            courseList.filter(
                (course) =>
                    course.course &&
                    course.course
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div className="container">
            <input
                className="form-control my-4"
                type="search"
                placeholder="Search for Course"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {filteredCourses.map((course, index) => (
                <div key={index} className="card mt-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center">
                            <a href={course.link} className="card-link me-3">
                                <h5 className="card-title">{course.course}</h5>
                            </a>
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => toggleUniversities(index)}
                            >
                                {activeCourse === index
                                    ? "Hide Partner Universities"
                                    : "Show Partner Universities"}
                            </button>
                        </div>
                        {activeCourse === index && (
                            <ul className="list-group mt-2">
                                {course.universities.map((uni, i) => (
                                    <li key={i} className="list-group-item">
                                        {uni.name} - {uni.country}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseTable;
