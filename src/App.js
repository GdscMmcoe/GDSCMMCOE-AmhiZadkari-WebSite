import NavBar from "./components/navbar";
import HomePage from "./pages/homePage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    RouterProvider,
    createBrowserRouter,
    BrowserRouter,
} from "react-router-dom";
import AboutUs from "./pages/AboutUsPage";
import Donate from "./pages/DonateUsPage";
import Events from "./pages/EventsPage";
import JoinUs from "./pages/JoinUsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutUs />,
    },
    {
        path: "/donate",
        element: <Donate />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/join",
        element: <JoinUs />,
    },
]);

function App() {
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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
