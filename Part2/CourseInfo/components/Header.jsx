/* eslint-disable react/prop-types */
const Header = ({ parts }) => {
  return (
    <div>
      {parts.parts.map((parts) => (
        <p key={parts["id"]}>{parts["name"]}</p>
      ))}
    </div>
  );
};

export default Header;
