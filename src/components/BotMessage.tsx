import { ReactNode } from "react";
import BotIcon from "./BotIcon";

interface BotMessageProps {
  children: ReactNode;
}

const BotMessage = ({ children }: BotMessageProps) => {
  return (
    <div className="flex gap-3 animate-fade-in-up">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center">
          <BotIcon size="sm" />
        </div>
      </div>
      <div className="bot-message flex-1">
        {children}
      </div>
    </div>
  );
};

export default BotMessage;
