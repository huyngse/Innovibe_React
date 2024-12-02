import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import MainContainer from "./containers/MainContainer";
import { useEffect } from "react";
import AdminContainer from "./containers/AdminContainer";
function App() {
  useEffect(() => {
    document.title = "Innovibe";
  }, []);
  return (
    <Routes>
      <Route path="log-in" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminContainer />} />
      <Route path="/*" element={<MainContainer />} />
    </Routes>
  );
}

export default App;
