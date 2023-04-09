import { HashRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Questionary from "./pages/Questionary";
import RouteChangeTracker from "./RouteChangeTracker";
import "./App.css";

const App = () => {
    RouteChangeTracker();
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="question" element={<Questionary />} />
                    <Route path="/result/:id" element={<Result />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;
