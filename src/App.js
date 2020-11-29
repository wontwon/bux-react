import "./App.css";

// external modules
import { Carousel } from "./shared";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Carousel infinite />
      </div>
    </div>
  );
}

export default App;
