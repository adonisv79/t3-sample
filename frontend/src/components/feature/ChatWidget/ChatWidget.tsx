import { useState } from "react";
import { ChatItem, ChatViewer } from "./ChatViewer";
import { styled } from "styled-components";
import { ChatInput } from "./ChatInput";
import { IUser } from "@/types/types";

export interface ChatWidgetProps {
  user: IUser;
}

export const ChatWidget = ({ user }: ChatWidgetProps) => {
  const [data, setData] = useState<ChatItem[]>([]);

  const handleSend = (message: string) => {
    if (!user || !user.name) return alert('user unknown! please set user!');
    if (!message) return alert('handling ewmpty message');
    setData((prevData) => [
      ...prevData,
      { timestamp: new Date(), user: user, message },
    ]);
  };

  return (
    <Container>
      <ChatViewer data={data} /> <ChatInput onSend={handleSend} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 10px;
  border: 2px solid #ddd;
  padding: 10px;
`;
