import { useState } from "react";

const Statistics = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Statistics</h2>
      <div>Good stats: {props.stats["good"]}</div>
      <div>Neutral: {props.stats["neutral"]}</div>
      <div>Bad: {props.stats["bad"]}</div>
      <div>All: {props.stats["all"]}</div>
      <div>
        Average:{" "}
        {(props.stats["good"] - props.stats["bad"]) / props.stats["all"]}
      </div>
      <div>Positive: {props.stats["good"] / props.stats["all"]}%</div>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setTotal(total - 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics
        stats={{ good: good, neutral: neutral, bad: bad, all: all }} // object of key-value pairs for states
      />
    </div>
  );
};

export default App;
