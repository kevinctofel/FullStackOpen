const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.parts.name} {props.parts.exercise}
    </p>
  );
};

export default Part;
