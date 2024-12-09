import ChatLayout from "@/layouts/ChatLayout";
import NewChatPage from "@/pages/chat/new-chat-page";
import { Route, Routes } from "react-router-dom";

const ChatContainer = () => {
  return (
    <ChatLayout>
      <Routes>
        <Route path="/" element={<NewChatPage />} />
      </Routes>
    </ChatLayout>
  );
};

export default ChatContainer;
