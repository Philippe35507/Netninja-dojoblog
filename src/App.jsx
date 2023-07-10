import "./index.css";

function App() {
  const title = "Welcome to our new blog";
  const likes = 50;
  const link = "http://www.google.com";
  // Dynamic values: strings(and used as attributes like href), numbers, arrays. No boleans, no objects.

  return (
    <div className="App">
      <div>
        <h1 className="content">App Component</h1>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href={link}>Google website</a>
      </div>
    </div>
  );
}

export default App;
