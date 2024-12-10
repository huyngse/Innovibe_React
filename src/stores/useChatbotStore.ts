// import runChat from '@/config/gemini';
import { create } from 'zustand'

type chatbotState = {
   currentPrompt: string,
   previousPrompt: string[],
   showResult: boolean,
   isLoading: boolean,
   resultData: string,
   onSent: (input: string) => void,
}

const useChatbotStore = create<chatbotState>((set) => ({
   currentPrompt: "",
   previousPrompt: [],
   showResult: false,
   isLoading: false,
   resultData: "",
   onSent: async (input) => {
      set({ resultData: "", isLoading: true, showResult: true, currentPrompt: input });
      // const response = await runChat(input);
      const response = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem non turpis convallis consectetur ut luctus tellus. Sed ex magna, laoreet quis urna nec, iaculis malesuada arcu. Suspendisse in feugiat nisl. Integer sed scelerisque diam. Vestibulum lectus nisi, convallis fermentum mollis ut, euismod efficitur risus. Fusce tincidunt libero a augue rutrum imperdiet. Nulla fringilla est non turpis efficitur posuere. Sed in magna eget elit efficitur molestie id at purus. Duis mi augue, elementum et est vel, euismod ullamcorper lorem. Nulla id nibh ac elit volutpat malesuada. Nulla convallis mauris rhoncus dui pretium, ut porttitor mauris congue. Pellentesque eu posuere tellus. Donec dictum ligula sit amet quam accumsan varius. Cras id condimentum lectus, a congue ligula. Cras velit magna, faucibus quis mi id, maximus consequat ligula. Integer dui nunc, finibus at quam eget, sodales fringilla diam.\n\nAliquam non augue eu neque iaculis elementum. Quisque erat lacus, sagittis vitae interdum vel, molestie ut lacus. Nulla laoreet vestibulum facilisis. Aliquam non laoreet felis, sed bibendum leo. In nulla ligula, euismod sit amet lacus vitae, ornare facilisis turpis. Nullam in convallis massa. Vestibulum rhoncus porttitor dolor quis tempus. Cras pharetra semper viverra."
      set({ isLoading: false })

      const responseArray = response.split(" ");
      for (let i = 0; i < responseArray.length; i++) {
         setTimeout(() => {
            set((state) => ({ resultData: state.resultData + responseArray[i] + " " }))
         }, 75)
      }
   },
}));

export default useChatbotStore;