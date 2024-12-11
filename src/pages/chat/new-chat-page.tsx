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
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChatSkeleton from "./chat-skeleton";
import ChatSuggestion from "./chat-suggestion";
import ChatAvatar from "./chat-avatar";

const formSchema = z.object({
  inputPrompt: z
    .string()
    .min(8, "Vui lòng nhập ít nhất 8 ký tự")
    .max(1000, "Vui lòng không nhập quá 1000 ký tự"),
});

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
    <div className="px-10 mb-28 pb-5 flex-1 overflow-auto rounded-scrollbar">
      {chatbotStore.showResult ? (
        <div>
          <div className="flex flex-col gap-5">
            {chatbotStore.currentPrompt?.chats.map((chat, index: number) => {
              const isLatestReponse =
                index + 1 == (chatbotStore.currentPrompt?.chats.length ?? 1);
              if (chat.type == "request") {
                return (
                  <div className="flex justify-end" key={index}>
                    <div className="bg-orange-600 text-white p-3 w-3/4 rounded-lg">
                      <ReactMarkdown>{chat.message}</ReactMarkdown>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <ChatAvatar
                      name="Trợ Lí"
                      badge="Gemini"
                      src="./electric-guitar.png"
                    />
                    <div className="flex justify-start">
                      <div className="bg-zinc-50 p-3 rounded-lg w-full">
                        <ReactMarkdown className={"whitespace-pre-wrap"}>
                          {isLatestReponse
                            ? chatbotStore.resultData
                            : chat.message}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {chatbotStore.isLoading && (
            <div>
              <ChatAvatar
                name="Trợ Lí"
                badge="Gemini"
                src="./electric-guitar.png"
              />
              <div className="flex justify-start">
                <div className="bg-zinc-50 p-3 rounded-lg w-full">
                  <ChatSkeleton />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <ChatSuggestion
          onSuggest={(value) => {
            form.setValue("inputPrompt", value);
          }}
        />
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
                {/* <Button
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
                </Button> */}
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
