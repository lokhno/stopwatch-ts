import { Main } from "./pages/Main";
import { Stopwatches } from "./pages/Stopwatches";
import { AllStopwatches } from "./pages/AllStopwatches";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/projects" element={<Main />} />
                        <Route path="/stopwatch/:projectId" element={<Stopwatches />} />
                        <Route path="/AllStopwatches" element={<AllStopwatches />} />
                        <Route path="/" element={<Main />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
