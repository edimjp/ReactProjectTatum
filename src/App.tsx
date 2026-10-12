import { BrowserRouter, Routes, Route } from "react-router";
import Client from "./pages/client/Client";

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
