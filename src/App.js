import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Main from "./components/Main/Main";
import BooksList from "./components/BooksList/BooksList";

function App() {


  return (
    <div className="App">
      <Navigator />
      <Main />
      <BooksList />
      
    </div>
  );
}

export default App;
