import { IUser } from "@/types/types";
import { styled } from "styled-components";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
});

export interface ChatItem {
  timestamp: Date;
  user: string;
  message: string;
}

export interface ChatViewerProps {
  data: ChatItem[];
}

export const ChatViewer = ({ data }: ChatViewerProps) => {
  return (
    <div>
      <Messages>
        {data.map((i) => {
          return (
            <ChatItemContainer>
              <strong>[{dateTimeFormat.format(i.timestamp)}] {i.user}:</strong> {i.message}
            </ChatItemContainer>
          );
        })}
      </Messages>
    </div>
  );
};

const Messages = styled.div`
  display: grid;
  height: 100px;
  overflow-y: scroll;
  padding: 20px;
  max-width: 300px;
  border: 2px solid #a0b;
  background-color: #ffe8e8;
  user-select: none;
`;

const ChatItemContainer = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
`;
