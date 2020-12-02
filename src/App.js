import "./App.css";
// import { Carousel } from "sb-carousel";

// external modules 
import { Carousel } from "./shared"; //Copied carousel source into an npm module and published it as sb-carousel

function App() {
  return (
    <div className="App">
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
