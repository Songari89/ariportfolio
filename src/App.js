import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./coponents/Header";
import VideoPlayer from "./coponents/VideoPlayer";
import VideoProvider from "./contexts/VideoProvider";


function App() {

  return (
    <VideoProvider>
      <div className="app">
        <VideoPlayer />
        <Header />
        <Outlet />
      </div>
    </VideoProvider>
  );
}

export default App;
