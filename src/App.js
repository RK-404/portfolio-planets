import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/planets" element={<Index/>} />
            <Route path="/planets/new" element={<New/>} />
            <Route path="/planets/:id" element={<Show/>} />
            <Route path="/planets/:id/edit" element={<Edit/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
