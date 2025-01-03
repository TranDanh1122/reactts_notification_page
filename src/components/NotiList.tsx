import React from "react";
import NotiItem from "./NotiItem";
const initData: Noti[] = [
    { id: 1, userAvatar: "./images/avatar-mark-webber.webp", userName: "Mark Webber", action: "reacted to your recent post", object: "My first tournament today!", time: "1m ago", isRead: false },
    { id: 2, userAvatar: "./images/avatar-angela-gray.webp", userName: "Angela Gray", action: "followed you", time: "5m ago", isRead: false },
    { id: 3, userAvatar: "./images/avatar-jacob-thompson.webp", userName: "Jacob Thompson", action: "has joined your group", object: "Chess Club", time: "1 day ago", isRead: false },
    { id: 4, userAvatar: "./images/avatar-rizky-hasanuddin.webp", userName: "Rizky Hasanuddin", action: "sent you a private message", object: "", content: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.", time: "5 days ago", isRead: true },
    { id: 5, userAvatar: "./images/avatar-kimberly-smith.webp", userName: "Kimberly Smith", action: "commented on your picture", time: "1 week ago", image: "./images/image-chess.webp", isRead: true },
    { id: 6, userAvatar: "./images/avatar-nathan-peterson.webp", userName: "Nathan Peterson", action: "reacted to your recent post", object: "5 end-game strategies to increase your win rate", time: "2 weeks ago", isRead: true },
    { id: 7, userAvatar: "./images/avatar-anna-kim.webp", userName: "Anna Kim", action: "left the group", object: "Chess Club", time: "2 weeks ago", isRead: true }
]
const NotiList: React.FC = (): React.JSX.Element => {
    const [notis, setNoti] = React.useState(initData)
    const handleRead = (itemId: number) => {
        const index = notis.findIndex(item => item.id == itemId)
        if (index == -1) return false
        notis[index] = { ...notis[index], isRead: true }
        setNoti([...notis])
    }
    const readAll = () => {
        setNoti(notis.map((item: Noti) => {
            return { ...item, isRead: true }
        }))
    }
    return (
        <div className="bg-white p-8 max-w-[750px] w-full rounded-xl">
            <div className="flex flex-nowrap items-center justify-start gap-16 mb:gap-4 mb-8">
                <h2 className="header ">Notifications </h2>
                <span className="bg-dark_grayish_blue py-1 px-2 rounded-md text-white font-bold">3</span>
                <span onClick={readAll} className="ml-auto body text-dark_grayish_blue cursor-pointer">Mark as read</span>
            </div>
            <div className="flex gap-8 flex-col justify-start items-start" >
                {
                    notis.map((noti: Noti) => <NotiItem key={noti.id} item={noti} onRead={handleRead}></NotiItem>)
                }
            </div>
        </div >
    )
}
export default NotiList 