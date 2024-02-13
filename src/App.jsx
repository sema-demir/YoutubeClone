import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Feed from "./pages/Feed";
import "./App.css";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./Components/Header";
import UndifenedPage from "./Components/UndifenedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<UndifenedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
