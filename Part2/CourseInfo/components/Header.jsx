/* eslint-disable react/prop-types */
const Header = ({ parts }) => {
  const initialValue = 0;

  const total = parts.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  console.log(parts.parts);

  return (
    <div>
      {parts.parts.map((part) => (
        <p key={part["id"]}>
          {part["name"]} {part["exercises"]}{" "}
        </p>
      ))}

      <h3>Total of {total} exercises</h3>
    </div>
  );
};

export default Header;
