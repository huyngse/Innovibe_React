import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import MainContainer from "./containers/MainContainer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Innovibe";
  }, []);
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<MainContainer />} />
    </Routes>
  );
}

export default App;
