"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

interface PromptInputProps {
  className?: string;
  placeholder?: string;
}

const PromptInput: FC<PromptInputProps> = ({ className, placeholder }) => {
  return (
    <div>
      <ReactTextareaAutosize
        className={cn(className)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PromptInput;
