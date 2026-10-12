import { BrowserRouter, Routes, Route } from "react-router";
import Client from "./pages/Client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
