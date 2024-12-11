export type Chat = {
    id: string,
    chats: {
        message: string,
        type: "request" | "response";
    }[]
}