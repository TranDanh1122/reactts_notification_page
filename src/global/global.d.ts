declare global {
    interface Noti {
        id: number,
        userName: string,
        userAvatar: string,
        action: string,
        object?: string,
        content?: string,
        image?: string,
        time: string,
        isRead: boolean
    }
}
export { }