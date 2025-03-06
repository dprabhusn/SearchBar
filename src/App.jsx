import "./App.css";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const items = [
    "HTML",
    "CSS",
    "Javascript",
    "React js",
    "Node js",
    "Mongo DB",
    "Express js",
    "MYSQL",
    "Next js",
    "Angular js",
    "Figma",
    "Photoshop",
    "Browser",
    "Text Editor",
  ];

  return (
    <>
      <SearchBar items={items} />
    </>
  );
}

export default App;
