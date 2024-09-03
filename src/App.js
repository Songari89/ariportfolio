import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./coponents/Header";
import VideoPlayer from "./coponents/VideoPlayer";
import VideoProvider from "./contexts/VideoProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProvider from "./contexts/ModalProvider";
import ImageModal from "./coponents/ImageModal";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoProvider>
        <ModalProvider>
          <div className="app">
            <VideoPlayer />
            <Header />
            <Outlet />
          </div>
          <ImageModal/>
        </ModalProvider>
      </VideoProvider>
    </QueryClientProvider>
  );
}

export default App;
