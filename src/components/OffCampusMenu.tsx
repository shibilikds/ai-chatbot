import { Trophy, Users, Download, Image, School } from "lucide-react";
import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";
import NavButton from "./NavButton";

interface OffCampusMenuProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
  onHome: () => void;
}

const OffCampusMenu = ({ onNavigate, onBack, onHome }: OffCampusMenuProps) => {
  const menuItems = [
    { icon: Trophy, label: "Know Results", view: "off-campus-results" },
    { icon: Users, label: "Programme Status", view: "off-campus-leaderboard" },
    { icon: Download, label: "Downloads", view: "off-campus-downloads" },
    { icon: Image, label: "Gallery", view: "off-campus-gallery" },
  ];

  return (
    <PageLayout title="Off-Campus Menu" onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <School size={24} className="text-primary" />
            <h2 className="font-poppins font-semibold text-lg text-foreground">
              Off-Campus Features
            </h2>
          </div>
          <p className="text-muted-foreground font-inter">
            Select an option below to proceed.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {menuItems.map((item) => (
              <NavButton
                key={item.view}
                icon={item.icon}
                label={item.label}
                onClick={() => onNavigate(item.view)}
              />
            ))}
          </div>
        </div>
      </BotMessage>
    </PageLayout>
  );
};

export default OffCampusMenu;
