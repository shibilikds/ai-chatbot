import { ReactNode } from "react";
import { ArrowLeft, Home } from "lucide-react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
  onHome: () => void;
  showHomeButton?: boolean;
}

const PageLayout = ({ title, children, onBack, onHome, showHomeButton = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-card/60 border border-border flex items-center justify-center hover:border-primary/40 transition-colors"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="font-poppins font-semibold text-lg text-primary">{title}</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-6 space-y-4">
        {children}
      </main>

      {/* Floating Home Button */}
      {showHomeButton && (
        <button onClick={onHome} className="floating-home z-50">
          <Home size={24} className="text-primary" />
        </button>
      )}
    </div>
  );
};

export default PageLayout;
