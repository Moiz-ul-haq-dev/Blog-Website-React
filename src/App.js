import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlogPage from "./pages/createBlog";
import ViewBlogPage from "./pages/viewBlog";
import BlogDetailsPage from "./pages/blogDetails";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBlogPage />} />
        <Route path="/view" element={<ViewBlogPage />} />
        <Route path="/view/:id" element={<BlogDetailsPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
