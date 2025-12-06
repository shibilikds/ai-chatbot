import { ReactNode } from "react";

interface UserMessageProps {
  children: ReactNode;
}

const UserMessage = ({ children }: UserMessageProps) => {
  return (
    <div className="flex justify-end animate-fade-in-up">
      <div className="user-message max-w-[80%]">
        <p className="text-foreground">{children}</p>
      </div>
    </div>
  );
};

export default UserMessage;
