/* eslint-disable react/prop-types */
import Name from "./Name";

const Output = (props) => {
  console.log(props);
  return (
    <Name
      key={props.props.name}
      name={props.props.name}
      phone={props.props.phone}
    />
  );
};

export default Output;
