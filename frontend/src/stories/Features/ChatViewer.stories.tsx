import { Meta, StoryFn } from "@storybook/react";
import {
  ChatItem,
  ChatViewer,
} from "../../components/feature/ChatWidget/ChatViewer";
import { IUser } from "@/types/types";

export default {
  title: "Features/Chat/Chat Viewer",
  component: ChatViewer,
} as Meta<typeof ChatViewer>;

const fakeUser: IUser = {
  id: 'scambotter001',
  name: "Honest Joe"
}

const sampleData: ChatItem[] = [
  { timestamp: new Date(), user: fakeUser, message: "Hi there!" },
  { timestamp: new Date(), user: fakeUser, message: "ASL please!" },
  {
    timestamp: new Date(),
    user: fakeUser,
    message: "BTW! do you want to get richj quick?",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message: "First I need you to free your mind an relax",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message: "Remove all the negativities and think positively",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message: "Trust me as I am your friend.",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message: "and as a true friend I only have your best interest at heart.",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message:
      "So each question is crucial for you to be rich so please answer as honestly as you can...",
  },
  {
    timestamp: new Date(),
    user: fakeUser,
    message:
      "First! do you have a credit card? if yes, can you share to me the numbers you see on the front and back?",
  },
];

const Template: StoryFn<typeof ChatViewer> = (args: any) => (
  <ChatViewer {...args} />
);

export const Sample = Template.bind({});
Sample.args = {
  data: sampleData,
};
