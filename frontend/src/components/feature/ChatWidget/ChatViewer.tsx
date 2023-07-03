import { IUser } from "@/types/types";
import { styled } from "styled-components";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});

export interface ChatItem {
  timestamp: Date;
  user: IUser;
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
          console.log(i)
          return (
            <ChatItemContainer>
              <strong>
                [{dateTimeFormat.format(i.timestamp)}] {i.user?.name}:
              </strong>{" "}
              {i.message}
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
  border: 2px solid #265ff0;
  background-color: #a6ffff;
  user-select: none;
`;

const ChatItemContainer = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
`;
