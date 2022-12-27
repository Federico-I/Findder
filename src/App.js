import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import User from "./Components/Pages/User";
import NotFound from "./Components/Pages/NotFound";
import { GitHubProvider } from "./Components/Context/GitHub/GitHubContext";
import { AlertProvicer } from "./Components/Context/Alert/AlertContext";
import Alert from "./Components/Alert";

function App() {
  return (
    <GitHubProvider>
      <AlertProvicer>
        <Router>
          <div className=".flex.flex-col.justify-h.screen">
            <Navbar />
            <main className="conatiner mx-auto px-3 pb-12">
              <Alert />
              <switch>
                <Routes>
                  <Route path="/" component={<Home />} />
                  <Route path="/about" component={<About />} />
                  <User path="/user/:login" component={User} />
                  <Route path="/notfound" component={<NotFound />} />
                  <Route path="*" component={<NotFound />} />
                </Routes>
              </switch>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvicer>
    </GitHubProvider>
  );
}

export default App;
