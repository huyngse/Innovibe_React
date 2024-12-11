import { Guitar, HandMetal, ListMusic, Music } from "lucide-react";
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

const ChatSuggestion = ({
  onSuggest,
}: {
  onSuggest: (value: string) => void;
}) => {
  return (
    <div>
      <h2 className="font-bold text-5xl mt-20">Xin chào bạn.</h2>
      <p className="font-semibold text-5xl text-gray-400">
        Hôm nay tôi có thể giúp gì cho bạn?
      </p>
      <div className="grid grid-cols-12 gap-5 my-10">
        {suggestedQuestions.map((question, index) => {
          return (
            <button
              key={index}
              className="col-span-6 h-16 text-start bg-zinc-100 hover:bg-zinc-200 duration-100 rounded-lg p-3 flex items-center gap-3 text-gray-500"
              onClick={() => {
                onSuggest(question.question);
              }}
            >
              <div className="rounded-full bg-zinc-100 p-2">
                <question.icon className="w-4 h-4" />
              </div>
              {question.question}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatSuggestion;
