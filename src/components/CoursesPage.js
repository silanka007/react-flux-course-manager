import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

const CoursesPage = (props) => {
    console.log("courses");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((_courses) => setCourses(_courses));
    }, []);

    return (
        <div>
            <h1 className="display-1">Courses Page</h1>
            <p className="lead">Pluralsight course by Cory House</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Catogory</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.title}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CoursesPage;
