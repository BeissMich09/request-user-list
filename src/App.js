import "./App.css";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import TitlePage from "./Components/TitlePage/TitlePage";

function App() {
  return (
    <div className="App">
      <div>
        <button>Загрузить большой набор данных (32)</button>
        <button>Загрузить маленький набор данных (1000)</button>
      </div>
      <AddNewUser />
      <TitlePage />
    </div>
  );
}

export default App;
