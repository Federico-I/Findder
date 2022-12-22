import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import { GitHubProvider } from "./Components/Context/GitHub/GitHubContext";

function App() {
  return (
    <GitHubProvider>
      <Router>
        <div className=".flex.flex-col.justify-h.screen">
          <Navbar />
          <main className="conatiner mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GitHubProvider>
  );
}

export default App;
