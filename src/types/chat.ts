export type Chat = {
    id: string,
    title: string,
    chats: {
        message: string,
        type: "request" | "response";
    }[]
}