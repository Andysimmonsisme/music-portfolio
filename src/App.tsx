import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Header />
        <main className="flex flex-grow flex-wrap justify-center items-center px-4 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
    </Router>
  )
}

export default App
