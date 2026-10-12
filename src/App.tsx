import { BrowserRouter, Routes, Route } from "react-router";
import Clients from "./pages/clients/Clients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
