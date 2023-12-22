import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { randomComment, randomName } from "../helper/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.message);
  // console.log(ChatMessages.length)
  useEffect(() => {
    const s = setInterval(() => {
      dispatch(
        addMessages({
          name: randomName(),
          message: randomComment(),
        })
      );
    }, 500);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div className="border border-black rounded-lg ml-2  bg-slate-200">
      <div className="ml-2 p-2  w-[450px] h-[540px]   overflow-y-scroll flex flex-col-reverse">
        {/* <h2 className="font-bold text-red-600">Live chat</h2> */}
        {ChatMessages.map((m, i) => <ChatMessage key={i} {...m} />)}
      </div>

      <form className="w-full p-2 ml-2 " onSubmit={(e)=>{
           e.preventDefault();
           console.log("OnSubmit",liveMessage)
           dispatch(addMessages({
            name:"Saksham Jain",
            message:liveMessage
           }
           ))
        setLiveMessage("")
}}>
        <input
          className="w-[350px] p-2 rounded-xl"
          type="text"
          placeholder="Live Chat"
          value={liveMessage}
          onChange={(e)=>{
            setLiveMessage(e.target.value)
          }}
         
        />
        <button className="mx-2 bg-green-100 px-2 rounded-xl">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
