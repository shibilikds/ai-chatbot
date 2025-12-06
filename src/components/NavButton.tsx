import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const NavButton = ({ icon: Icon, label, onClick }: NavButtonProps) => {
  return (
    <button onClick={onClick} className="nav-button w-full">
      <Icon size={20} className="text-primary" strokeWidth={1.5} />
      <span className="font-poppins font-medium text-foreground">{label}</span>
    </button>
  );
};

export default NavButton;
