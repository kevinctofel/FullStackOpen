/* eslint-disable react/jsx-key */
const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  );
};

export default Course;
