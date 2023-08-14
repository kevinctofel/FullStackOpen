import Part from "./Part";
const Content = (props) => {
  console.log(props.parts);
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  );
};

export default Content;
