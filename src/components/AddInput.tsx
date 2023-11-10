import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form({
  width: "100%",
});

const Input = styled.input({
  width: "65%",
  border: "none",
  padding: 16,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
});

const Button = styled.button({
  width: "30%",
  border: "none",
  padding: 16,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
  marginLeft: 10,
  cursor: 'pointer'
});

export interface AddInputProps {
  onAdd: (label: string) => void;
}

export const AddInput: FC<AddInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new todo item here"
      />

      <Button>Submit</Button>

    </Form>
  );
};
