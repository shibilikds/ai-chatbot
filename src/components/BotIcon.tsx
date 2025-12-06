import { Bot } from "lucide-react";

interface BotIconProps {
  size?: "sm" | "lg";
  withGlow?: boolean;
}

const BotIcon = ({ size = "sm", withGlow = false }: BotIconProps) => {
  const iconSize = size === "lg" ? 64 : 32;
  
  return (
    <div className={`relative ${withGlow ? "glow-icon" : ""}`}>
      {withGlow && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary/30 blur-3xl rounded-full scale-150" />
      )}
      <Bot 
        size={iconSize} 
        className="text-primary relative z-10" 
        strokeWidth={1.5}
      />
    </div>
  );
};

export default BotIcon;
