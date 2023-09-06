/* eslint-disable react/prop-types */
const Header = ({ courses }) => {
  const initialValue = 0;

  const total = courses.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  console.log(courses.parts);

  return (
    <div>
      {courses.parts.map((part) => (
        <p key={part["id"]}>
          {part["name"]} {part["exercises"]}{" "}
        </p>
      ))}

      <h3>Total of {total} exercises</h3>
    </div>
  );
};

export default Header;
