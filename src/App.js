import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import History from "./pages/history";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route exact path="/history" element={<History />} />
        </Routes>
      </Router>
      <Home />
    </DndProvider>
  );
}

export default App;
