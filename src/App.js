import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./coponents/Header";
import bgvideo from "./image/river.mp4"

function App() {
  return (
    <div className="app">
   
        <video
          autoPlay
          muted
          loop
          controlsList="nodownload nofullscreen noremoteplayback noduration"
          className="videocontainer"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
    
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
