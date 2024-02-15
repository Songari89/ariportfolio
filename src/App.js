import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./coponents/Header";
import VideoPlayer from "./coponents/VideoPlayer";
import VideoProvider from "./contexts/VideoProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoProvider>
        <div className="app">
          <VideoPlayer />
          <Header />
          <Outlet />
        </div>
      </VideoProvider>
    </QueryClientProvider>
  );
}

export default App;
