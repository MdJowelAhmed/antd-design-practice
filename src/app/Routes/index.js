import { Routes, Route } from "react-router-dom"; // ✅ ES6 import ব্যবহার করুন
import Category from "../pagess/Category";
import Home from "../pagess/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
    </Routes>
  );
}

export default AppRoutes;
