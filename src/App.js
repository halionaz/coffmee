import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Questionary from "./pages/Questionary";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="question" element={<Questionary />} />
                    <Route path="/result/:id" element={<Result />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
