import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Luigi");
    setAge(30);
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

/*
const Home = () => {
  let name = "Mario";
  const handleClick = () => {
    name = "Luigi";
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
*/
