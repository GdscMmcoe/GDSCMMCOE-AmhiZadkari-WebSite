import NavBar from "./components/navbar";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUsPage";
import Donate from "./pages/DonateUsPage";
import Events from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import JoinUs from "./pages/JoinUsPage";
import ErrorPage from "./pages/ErrorPage";
import { getEvents } from "./firebase";
import Footer from "./components/Footer";

function App() {
    getEvents();

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/join" element={<JoinUs />} />
                    <Route path="event/:id" element={<EventPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
