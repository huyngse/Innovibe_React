export type Notification = {
    id: number,
    type: string,
    message: string,
    timestamp: string,
    status: "unread" | "read"
}