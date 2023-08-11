import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part part={props.part} exercise={props.exercise} />
    </div>
  );
};

export default Content;
