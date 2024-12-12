// import runChat from '@/config/gemini';
import { Chat } from '@/types/chat';
import { create } from 'zustand'

type chatbotState = {
   currentPrompt: Chat | undefined,
   previousPrompts: Chat[],
   showResult: boolean,
   isLoading: boolean,
   resultData: string,
   onSent: (input: string) => void,
   newChat: () => void,
}
function generateUniqueId() {
   const timestamp = Date.now();
   const randomNum = Math.floor(Math.random() * 1000);
   return `${timestamp}-${randomNum}`;
}

const useChatbotStore = create<chatbotState>((set) => ({
   currentPrompt: undefined,
   previousPrompts: [],
   showResult: false,
   isLoading: false,
   resultData: "",
   onSent: async (input) => {
      set({ resultData: "", isLoading: true, showResult: true });
      // Save user's request to current prompt
      set(prev => {
         if (prev.currentPrompt == undefined) {
            return {
               currentPrompt: {
                  id: "chat-" + generateUniqueId(),
                  title: "New Chat",
                  chats: [
                     {
                        message: input,
                        type: "request"
                     }
                  ]
               }
            }
         }
         return {
            currentPrompt: {
               ...prev.currentPrompt,
               chats: [
                  ...prev.currentPrompt.chats,
                  {
                     message: input,
                     type: "request"
                  }
               ]
            }
         };
      })
      // const response = await runChat(input);
      // Fixed response value to avoid overuse Gemini API
      const response = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem non turpis convallis consectetur ut luctus tellus. Sed ex magna, laoreet quis urna nec, iaculis malesuada arcu. Suspendisse in feugiat nisl. Integer sed scelerisque diam. Vestibulum lectus nisi, convallis fermentum mollis ut, euismod efficitur risus. Fusce tincidunt libero a augue rutrum imperdiet. Nulla fringilla est non turpis efficitur posuere. Sed in magna eget elit efficitur molestie id at purus. Duis mi augue, elementum et est vel, euismod ullamcorper lorem. Nulla id nibh ac elit volutpat malesuada. Nulla convallis mauris rhoncus dui pretium, ut porttitor mauris congue. Pellentesque eu posuere tellus. Donec dictum ligula sit amet quam accumsan varius. Cras id condimentum lectus, a congue ligula. Cras velit magna, faucibus quis mi id, maximus consequat ligula. Integer dui nunc, finibus at quam eget, sodales fringilla diam.\n\nAliquam non augue eu neque iaculis elementum. Quisque erat lacus, sagittis vitae interdum vel, molestie ut lacus. Nulla laoreet vestibulum facilisis. Aliquam non laoreet felis, sed bibendum leo. In nulla ligula, euismod sit amet lacus vitae, ornare facilisis turpis. Nullam in convallis massa. Vestibulum rhoncus porttitor dolor quis tempus. Cras pharetra semper viverra."
      setTimeout(() => {
         set({ isLoading: false });
         // Save AI's reponse to current prompt
         set(prev => {
            if (prev.currentPrompt != undefined) {
               return {
                  currentPrompt: {
                     ...prev.currentPrompt,
                     chats: [
                        ...prev.currentPrompt.chats,
                        {
                           message: response,
                           type: "response"
                        }
                     ]
                  }
               }
            }
            return prev;
         })
         // "Generating text" effect
         const responseArray = response.split(" ");
         for (let i = 0; i < responseArray.length; i++) {
            setTimeout(() => {
               set((state) => ({ resultData: state.resultData + responseArray[i] + " " }))
            }, 75)
         }
         // Save current prompt to previous prompts array
         // If current prompt already existed then replace it else add new element to the array
         set(prev => {
            if (prev.currentPrompt != undefined) {
               const currentPromptId = prev.currentPrompt!.id;
               const existingPrompt = prev.previousPrompts.find((prompt) => prompt.id == currentPromptId);
               if (existingPrompt == null) {
                  return {
                     previousPrompts: [
                        ...prev.previousPrompts,
                        prev.currentPrompt
                     ]
                  }
               } else {
                  return {
                     previousPrompts: prev.previousPrompts.map((prompt) => prompt.id == currentPromptId ? prev.currentPrompt! : prompt)
                  };
               }
            }
            return prev;
         })
      }, 1000);
   },
   newChat: () => {
      set({
         currentPrompt: undefined,
         showResult: false
      })
   }
}));

export default useChatbotStore;