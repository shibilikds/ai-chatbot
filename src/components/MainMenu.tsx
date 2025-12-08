import { Trophy, Users, School, BookOpen, Download, Image, ExternalLink } from "lucide-react";
import BotIcon from "./BotIcon";
import NavButton from "./NavButton";

interface MainMenuProps {
  onNavigate: (view: string) => void;
}

const MainMenu = ({ onNavigate }: MainMenuProps) => {
  const menuItems = [
    { icon: Trophy, label: "Know Results", view: "results" },
    { icon: Users, label: "Programme Status", view: "leaderboard" },
    { icon: School, label: "Off-Campus", view: "off-campus-menu" },
    { icon: BookOpen, label: "Learn More", view: "learn-more" },
    { icon: Download, label: "Downloads", view: "downloads" },
    { icon: Image, label: "Gallery", view: "gallery" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 grid-overlay">
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <BotIcon size="lg" withGlow />
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold gradient-text">
            Consoulium Event Bot
          </h1>
          <p className="text-muted-foreground font-inter">
            Bukhari Dawa College – 2025
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-3 animate-fade-in-up-delay-1">
          {menuItems.map((item) => (
            <NavButton
              key={item.view}
              icon={item.icon}
              label={item.label}
              onClick={() => onNavigate(item.view)}
            />
          ))}
        </div>

        {/* Website Link */}
        <div className="flex justify-center animate-fade-in-up-delay-2">
          <a
            href="https://consoulium.sabicofficial.in/admin.html"
            className="glass-card px-8 py-4 flex items-center gap-3 hover:border-primary/60 hover:shadow-[var(--glow-border)] transition-all duration-300"
          >
            <span className="font-poppins font-medium text-foreground">Back to Website</span>
            <ExternalLink size={18} className="text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
