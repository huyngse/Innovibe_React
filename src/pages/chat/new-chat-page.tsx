import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import runChat from "@/config/gemini";
import {
  Guitar,
  HandMetal,
  ImagePlus,
  ListMusic,
  Mic,
  Music,
  SendHorizontal,
} from "lucide-react";
import { useState } from "react";
const suggestedQuestions = [
  {
    id: 1,
    question: "Tôi nên bắt đầu với những hợp âm cơ bản nào?",
    icon: Music,
  },
  {
    id: 2,
    question: "Làm thế nào để tôi có thể cải thiện sự khéo léo của ngón tay?",
    icon: HandMetal,
  },
  {
    id: 3,
    question: "Kỹ thuật khảy đàn hiệu quả là gì?",
    icon: Guitar,
  },
  {
    id: 4,
    question: "Tôi có thể đọc tab guitar và bản nhạc như thế nào?",
    icon: ListMusic,
  },
];
const NewChatPage = () => {
  const [chatPrompt, setChatPrompt] = useState("");
  return (
    <div className="p-10 relative flex-1">
      <h2 className="font-bold text-5xl mt-10">Xin chào bạn.</h2>
      <p className="font-semibold text-5xl text-gray-400">
        Hôm nay tôi có thể giúp gì cho bạn?
      </p>
      <div className="grid grid-cols-12 gap-5 my-10">
        {suggestedQuestions.map((question, index) => {
          return (
            <button
              key={index}
              className="col-span-6 h-16 text-start bg-zinc-100 hover:bg-zinc-200 duration-100 rounded-lg p-3 flex items-center gap-3 text-gray-500"
            >
              <div className="rounded-full bg-zinc-100 p-2">
                <question.icon className="w-4 h-4" />
              </div>
              {question.question}
            </button>
          );
        })}
      </div>
      <div className="absolute bottom-0 w-full left-0 px-10 py-3 bg-white drop-shadow">
        <div className="relative">
          <Textarea
            className="py-3 px-10 w-full rounded-lg"
            placeholder="Nhập trò chuyện ở đây"
            value={chatPrompt}
            onChange={(e) => {
              setChatPrompt(e.target.value);
            }}
          />
          <div className="absolute bottom-3 right-3">
            <div className="flex gap-3">
              <Button className="rounded-full" variant={"outline"}>
                <ImagePlus className="w-5 h-5" />
              </Button>
              <Button className="rounded-full" variant={"outline"}>
                <Mic className="w-5 h-5" />
              </Button>
              <Button
                className="rounded-full"
                onClick={() => {
                  runChat(chatPrompt);
                }}
              >
                <SendHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-center">
          <span className="font-semibold">Chatbot</span> có thể đưa ra thông tin
          không chính xác, bao gồm thông tin về con người, vì vậy hãy kiểm tra
          lại phản hồi của nó.
        </p>
      </div>
    </div>
  );
};

export default NewChatPage;
