import React from "react";
import { Button } from "@/components/ui/button";
import ChatIcon from "@/svgs/ChatIcon";

const ChatButton = () => {
  return (
    <Button
      variant="secondary"
      className="bg-red-200 body-3-medium font-bold"
      size="lg"
    >
      <ChatIcon className="text-red-500" />
      Chat with us
    </Button>
  );
};

export default ChatButton;
