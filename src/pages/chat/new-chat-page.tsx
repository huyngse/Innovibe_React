import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import useChatbotStore from "@/stores/useChatbotStore";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Guitar,
  HandMetal,
  ImagePlus,
  ListMusic,
  Loader,
  Mic,
  Music,
  SendHorizontal,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  inputPrompt: z
    .string()
    .min(2, "Vui lòng nhập ít nhất 2 ký tự")
    .max(1000, "Vui lòng không nhập quá 1000 ký tự"),
});

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
  const chatbotStore = useChatbotStore((state) => state);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputPrompt: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    chatbotStore.onSent(values.inputPrompt);
    form.reset();
  }
  return (
    <div className="px-10 pb-24 flex-1 overflow-auto">
      {chatbotStore.showResult ? (
        <div>
          {chatbotStore.isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <ReactMarkdown>{chatbotStore.resultData}</ReactMarkdown>
          )}
        </div>
      ) : (
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
                    form.setValue("inputPrompt", question.question);
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
      )}
      <div className="absolute bottom-0 w-full left-0 px-10 py-3 bg-white drop-shadow">
        <Form {...form}>
          <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="inputPrompt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="py-3 px-10 w-full rounded-lg"
                      placeholder="Nhập trò chuyện ở đây"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs absolute bottom-3 left-10" />
                </FormItem>
              )}
            />
            <div className="absolute bottom-3 right-3">
              <div className="flex gap-3">
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  type="button"
                >
                  <ImagePlus className="w-5 h-5" />
                </Button>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  type="button"
                >
                  <Mic className="w-5 h-5" />
                </Button>
                <Button className="rounded-full" type="submit">
                  <SendHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </form>
        </Form>

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
