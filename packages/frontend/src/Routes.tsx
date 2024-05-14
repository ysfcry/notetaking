import { Route, Routes } from "react-router-dom";
import NotFound from "./containers/NotFound.tsx";
import Home from "./containers/Home.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* hatalı istekleri yakala */}
    <Route path="*" element={<NotFound />} />;

    </Routes>
  );
}