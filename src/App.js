import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./Page/Skills/Skills";
import Projects from "./Page/Projects/Projects";

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
      <Home />
      <Routes>
        <Route path="/projects" element={<> <Projects /> </>} />
        <Route path="/skills" element={<> <Skills /> </>} />

      </Routes>
     </Router>
    </div>
  );
}

export default App;
