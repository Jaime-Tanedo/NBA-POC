import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/fetch-data" element={<FetchData />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
