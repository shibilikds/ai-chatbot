import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";

interface LeaderboardViewProps {
  onBack: () => void;
  onHome: () => void;
  isOffCampus?: boolean;
}

const LeaderboardView = ({ onBack, onHome, isOffCampus = false }: LeaderboardViewProps) => {
  const url = isOffCampus 
    ? "https://offcampus.festie.app/results/leaderboard?headless=true"
    : "https://consouium.festie.app/results/leaderboard?headless=true";

  const title = isOffCampus ? "Off-Campus Team Status Leaderboard" : "Team Status Leaderboard";

  return (
    <PageLayout title={title} onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground font-inter">
            Check out the current team rankings below. Please note this is a preview only!
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src={url}
              className="w-full h-[600px] bg-card"
              title="Leaderboard"
            />
          </div>
        </div>
      </BotMessage>
    </PageLayout>
  );
};

export default LeaderboardView;
