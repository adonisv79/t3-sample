import { Meta, StoryFn } from "@storybook/react";
import { ChatWidget } from "@/components/feature/ChatWidget/ChatWidget";
import { IUser } from "@/types/types";

export default {
  title: "Features/Chat/Chat Widget",
  component: ChatWidget,
} as Meta<typeof ChatWidget>;


const mockUser: IUser = {
  id: 'stroyuser001',
  name: "StoryUser"
}

const Template: StoryFn<typeof ChatWidget> = (args: any) => (
  <ChatWidget {...args} />
);

Template.args = {
  user: mockUser
}

export const Sample = Template.bind({});
