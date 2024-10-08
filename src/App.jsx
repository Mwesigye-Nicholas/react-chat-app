import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Join/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
