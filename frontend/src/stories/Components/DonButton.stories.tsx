import { Meta, StoryFn  } from "@storybook/react";
import { DonButton } from "@/components/basic/DonButton";

export default {
  title: "Components/Don's Button",
  component: DonButton
} as Meta<typeof DonButton>;

const Template: StoryFn<typeof DonButton> = (args: any) => <DonButton {...args} >Don's Button</DonButton>

export const Sample = Template.bind({});
Sample.args = {
  primary: true,
}
