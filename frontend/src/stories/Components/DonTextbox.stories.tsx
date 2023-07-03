import { Meta, StoryFn } from "@storybook/react";
import { DonTextbox } from "@/components/basic/DonTextBox";
import { styled } from "styled-components";

export default {
  title: "Components/Don's Textbox",
  component: DonTextbox,
} as Meta<typeof DonTextbox>;

const StoryViewport = styled.div<{
  viewport_width: "xs" | "sm" | "md" | "lg";
  viewport_border?: boolean;
}>`
  max-width: ${({ viewport_width }) =>
    viewport_width === "xs"
      ? "599px"
      : viewport_width === "sm"
      ? "899px"
      : viewport_width === "md"
      ? "1199px"
      : viewport_width === "lg"
      ? "1535px"
      : "0px"};
  ${({ viewport_border }) => viewport_border && "border: 1px solid #777"};
`;

const Template: StoryFn<typeof DonTextbox> = (args: any) => (
  <StoryViewport viewport_width="sm">
    <DonTextbox {...args} />
  </StoryViewport>
);

export const Default = Template.bind({});


const TemplateXS: StoryFn<typeof DonTextbox> = (args: any) => (
  <StoryViewport viewport_width="xs" viewport_border>
    <DonTextbox {...args} />
  </StoryViewport>
);

export const XtraSmallVP = TemplateXS.bind({});

const TemplateMD: StoryFn<typeof DonTextbox> = (args: any) => (
  <StoryViewport viewport_width="md" viewport_border>
    <DonTextbox {...args} />
  </StoryViewport>
);

export const MediumVP = TemplateMD.bind({});

const TemplateLG: StoryFn<typeof DonTextbox> = (args: any) => (
  <StoryViewport viewport_width="lg" viewport_border>
    <DonTextbox {...args} />
  </StoryViewport>
);

export const LargeVP = TemplateLG.bind({});