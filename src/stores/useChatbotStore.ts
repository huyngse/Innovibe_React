import runChat from '@/config/gemini';
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
        set({ resultData: "", isLoading: true, showResult: true });
        const response = await runChat(input);
        set({ resultData: response, isLoading: false })
    },
}));

export default useChatbotStore;