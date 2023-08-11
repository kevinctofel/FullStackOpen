import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part parts={props.name} exercise={props.parts.exercise} />
    </div>
  );
};

export default Content;
