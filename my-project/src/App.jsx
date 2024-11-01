import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="p-6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />


        </Routes>
      </BrowserRouter>
      </div>
  );
}
