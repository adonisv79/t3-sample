import { useState } from "react";
import { ChatItem, ChatViewer } from "./ChatViewer";

export const ChatWidget = () => {
  const [data, setData] = useState<ChatItem[]>([]);
  return <ChatViewer data={data} />    
};
