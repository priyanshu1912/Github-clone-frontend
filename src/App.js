import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login/LoginPage";
import HomePage from "./screens/home/HomePage";
import RequireAuth from "./components/RequireAuth";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_PRODUCTION_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RequireAuth />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
