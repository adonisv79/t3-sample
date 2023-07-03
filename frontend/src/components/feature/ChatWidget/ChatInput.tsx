import { DonButton } from "@/components/basic/DonButton";
import { DonTextbox } from "@/components/basic/DonTextBox";
import { useState } from "react";
import { styled } from "styled-components";

const handleSend = () => {};

export interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    onSend(value);
    setValue("");
  };

  return (
    <Container>
      <DonTextbox
        value={value}
        setValue={setValue}
        onEnterPressed={handleSend}
      />
      <DonButton onCLick={handleSend}>Send</DonButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
