import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./coponents/Header";
import VideoPlayer from "./coponents/VideoPlayer";
import VideoProvider from "./contexts/VideoProvider";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ScrollProvider from "./contexts/ScrollProvider";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <VideoProvider>
        <ScrollProvider>
          <div className="app">
            <VideoPlayer />
            <Header />
            <Outlet />
          </div>
        </ScrollProvider>
      </VideoProvider>
    </QueryClientProvider>
  );
}

export default App;
