import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

interface ResultsViewProps {
  onBack: () => void;
  onHome: () => void;
  isOffCampus?: boolean;
}

const ResultsView = ({ onBack, onHome, isOffCampus = false }: ResultsViewProps) => {
  const [chessNumber, setChessNumber] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState<string | null>(null);

  const baseUrl = isOffCampus 
    ? "https://offcampus.festie.app/results/candidates" 
    : "https://consouium.festie.app/results/candidates";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (chessNumber.trim()) {
      setSubmittedNumber(chessNumber.trim());
    }
  };

  const title = isOffCampus ? "Off-Campus Results" : "Check Results";

  return (
    <PageLayout title={title} onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground font-inter">
            Enter your chess number below to view your results.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={chessNumber}
              onChange={(e) => setChessNumber(e.target.value)}
              placeholder="Enter chess number"
              className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground font-inter focus:outline-none focus:border-primary/60 transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 transition-colors"
            >
              <Search size={20} className="text-primary" />
            </button>
          </form>
        </div>
      </BotMessage>

      {submittedNumber && (
        <>
          <UserMessage>
            My chess number is {submittedNumber}.
          </UserMessage>

          <BotMessage>
            <div className="space-y-3">
              <p className="text-muted-foreground font-inter">
                Here are your results:
              </p>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src={`${baseUrl}/${submittedNumber}?headless=true`}
                  className="w-full h-[500px] bg-card"
                  title="Results"
                />
              </div>
            </div>
          </BotMessage>
        </>
      )}
    </PageLayout>
  );
};

export default ResultsView;
