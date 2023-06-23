import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Browse from "./pages/Browse";
import Deck from "./pages/Deck";
import Navbar from "./components/Navbar";
import CreateCreature from "./create_pages/CreateCreature";
import CreateMantra from "./create_pages/CreateMantra";
import CreateBlessing from "./create_pages/CreateBlessing";
import CreateDomain from "./create_pages/CreateDomain";
import CardPage from "./pages/CardPage";
import PrintPage from "./pages/PrintPage";

const App = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== "/print" && <Navbar />}
            <div
                className={
                    location.pathname !== "/print" ? "mt-20 container" : ""
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/deck" element={<Deck />} />

                    <Route path="/card/:id" element={<CardPage />} />

                    <Route path="/creature" element={<CreateCreature />} />
                    <Route path="/mantra" element={<CreateMantra />} />
                    <Route path="/blessing" element={<CreateBlessing />} />
                    <Route path="/domain" element={<CreateDomain />} />

                    <Route
                        path="/creature/edit/:id"
                        element={<CreateCreature edit />}
                    />
                    <Route
                        path="/mantra/edit/:id"
                        element={<CreateMantra edit />}
                    />
                    <Route
                        path="/blessing/edit/:id"
                        element={<CreateBlessing edit />}
                    />
                    <Route
                        path="/domain/edit/:id"
                        element={<CreateDomain edit />}
                    />

                    <Route path="/print" element={<PrintPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
