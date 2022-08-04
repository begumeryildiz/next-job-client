import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import JobsListPage from "./pages/JobsListPage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsListPage />} />
                <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;