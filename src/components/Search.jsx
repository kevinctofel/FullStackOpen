/* eslint-disable react/prop-types */
import Name from "./Name";
const Search = (props) => {
  console.log(props);
  return (
    <div>
      {props.searchData[0]
        .filter((eachPerson) =>
          eachPerson.name
            .toLowerCase()
            .includes(props.searchData[1].toLowerCase())
        )
        .map((person) => (
          <Name key={person.name} name={person.name} phone={person.phone} />
        ))}
    </div>
  );
};

export default Search;
