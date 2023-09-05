/* eslint-disable react/prop-types */

import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <Header parts={course}></Header>
    </div>
  );
};

export default Course;
