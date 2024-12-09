import { Guitar, HandMetal, ListMusic, Music } from "lucide-react";
const suggestedQuestions = [
  {
    id: 1,
    question: "What are the basic chords I should start with?",
    icon: Music,
  },
  {
    id: 2,
    question: "How can I improve my finger dexterity?",
    icon: HandMetal,
  },
  {
    id: 3,
    question: "What are effective techniques for strumming?",
    icon: Guitar,
  },
  {
    id: 4,
    question: "How do I read guitar tabs and sheet music?",
    icon: ListMusic,
  },
];
const NewChatPage = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-5xl mt-10">Hello there.</h2>
      <p className="font-semibold text-5xl text-gray-400">
        How can I help you today?
      </p>
      <div className="grid grid-cols-12 gap-5 my-10">
        {suggestedQuestions.map((question, index) => {
          return (
            <button
              key={index}
              className="col-span-6 text-start bg-zinc-100 hover:bg-zinc-200 duration-100 rounded-lg p-3 flex items-center gap-3 text-gray-500"
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

export default NewChatPage;
