/* eslint-disable react/prop-types */
const Header = ({ props }) => {
  // const { parts } = props.parts;
  const initialValue = 0;

  const total = props.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  console.log(props);

  return (
    <div>
      {props.map((part) => (
        <p key={part["id"]}>
          {part["name"]} {part["exercises"]}{" "}
        </p>
      ))}

      <h3>Total of {total} exercises</h3>
    </div>
  );
};

export default Header;
