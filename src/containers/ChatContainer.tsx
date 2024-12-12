import ChatLayout from "@/layouts/chat-layout";
import ChatPage from "@/pages/chat/chat-page";
import { Route, Routes } from "react-router-dom";

const ChatContainer = () => {
  return (
    <ChatLayout>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/:chatId" element={<ChatPage />} />
      </Routes>
    </ChatLayout>
  );
};

export default ChatContainer;
