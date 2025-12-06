import { Youtube, Instagram, MessageSquare } from "lucide-react";
import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";

interface LearnMoreViewProps {
  onBack: () => void;
  onHome: () => void;
}

const LearnMoreView = ({ onBack, onHome }: LearnMoreViewProps) => {
  const links = [
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@BUKHARIMEDIA" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/consoulium/?igsh=MXA5Y3plYmgyNzM3Zg==" },
    { icon: MessageSquare, label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029VamEcGF3AzNTO4z7wJ1N" },
  ];

  return (
    <PageLayout title="Learn More" onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            About Consoulium 2025
          </h2>
          <p className="text-muted-foreground font-inter leading-relaxed">
            Consoulium is the annual literary and cultural festival of Bukari Dawa College. 
            This bot is your personal guide to the event.
          </p>
          <p className="text-muted-foreground font-inter leading-relaxed">
            Use the main menu to navigate through check your results, Off-Campus Updates, 
            see team leaderboards and many more.
          </p>
        </div>
      </BotMessage>

      <BotMessage>
        <div className="space-y-4">
          <h3 className="font-poppins font-semibold text-foreground">Essential Links</h3>
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <link.icon size={20} className="text-primary" />
                <span className="font-inter text-foreground">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </BotMessage>
    </PageLayout>
  );
};

export default LearnMoreView;
