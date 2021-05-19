import "./App.css";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
// import SearchBar from "./Components/SearchBar/SearchBar";
import TitlePage from "./Components/TitlePage/TitlePage";

function App() {
  return (
    <div className="App">
      <AddNewUser />
      {/* <SearchBar /> */}
      <TitlePage />
    </div>
  );
}

export default App;
