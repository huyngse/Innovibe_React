import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/log-in-page";
import MainContainer from "./containers/MainContainer";
import { useEffect } from "react";
import "@smastrom/react-rating/style.css";
import ChatContainer from "./containers/ChatContainer";
import SignUpPage from "./pages/auth/sign-up-page";
function App() {
  useEffect(() => {
    document.title = "Innovibe";
  }, []);
  return (
    <Routes>
      <Route path="log-in" element={<LoginPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="/chat/*" element={<ChatContainer />} />
      <Route path="/*" element={<MainContainer />} />
    </Routes>
  );
}

export default App;
