import clsx from "clsx";
import React from "react";
interface NotiProps {
    item: Noti
    onRead: (itemId: number) => void
}
const NotiItem: React.FC<NotiProps> = ({ item, onRead }): React.JSX.Element => {
    return (
        <div onClick={() => onRead(item.id)} className={clsx("flex flex-wrap w-full items-start justify-start gap-5 p-5 rounded-lg", { "bg-very_light_grayish_blue": !item.isRead })} >
            <img src={item.userAvatar} alt={item.content} className="w-11 h-11 object-cover " />
            <div className="w-[calc(100%-4rem)]">
                <div className="flex flex-nowrap items-center justify-start w-full ">
                    <div className="w-full">
                        <a href="#" className="body-bold text-very_dark_blue">{item.userName}</a>
                        <span className="body text-dark_grayish_blue mx-2">{item.action}</span>
                        <a href="#" className="body-bold  text-dark_grayish_blue">{item.object}</a>
                        <img src="./images/oval.svg" alt="unread" className={clsx("w-2 h-2 object-cover inline-block ml-2", {
                            "hidden": item.isRead
                        })} />
                        <a href="#" className="body text-grayish_blue block">{item.time}</a>
                    </div>
                    <img src={item.image} alt={item.object} className={clsx("w-11 h-11 object-cover ml-auto", {
                        "block": item.image,
                        'hidden': !item.image
                    })} />
                </div>

                <p className={clsx("body text-dark_grayish_blue p-8  border-[1px] border-solid border-dark_grayish_blue mt-4", {
                    "hidden": !item.content,
                    "block": item.content
                })} > {item.content}</p>
            </div>
        </div >
    )
}
export default NotiItem
