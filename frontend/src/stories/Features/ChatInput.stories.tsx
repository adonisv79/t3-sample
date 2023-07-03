import { Meta, StoryFn } from "@storybook/react";
import { ChatInput } from "../../components/feature/ChatWidget/ChatInput";

export default {
  title: "Features/Chat/Chat Input",
  component: ChatInput,
} as Meta<typeof ChatInput>;

const Template: StoryFn<typeof ChatInput> = (args: any) => (
  <ChatInput {...args} />
);

export const Sample = Template.bind({});
