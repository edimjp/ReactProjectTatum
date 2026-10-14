import { Routes, Route } from "react-router";
import Layout from "./components/Layout.tsx";
// import Home from "./pages/home/Home.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={null} />
      </Route>
    </Routes>
  );
}

export default App;
