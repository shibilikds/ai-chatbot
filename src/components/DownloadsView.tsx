import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";

interface DownloadsViewProps {
  onBack: () => void;
  onHome: () => void;
  isOffCampus?: boolean;
}

const DownloadsView = ({ onBack, onHome, isOffCampus = false }: DownloadsViewProps) => {
  const url = isOffCampus 
    ? "https://offcampus.festie.app/downloads"
    : "https://consouium.festie.app/downloads";

  const title = isOffCampus ? "Off-Campus Downloads" : "Downloads";

  return (
    <PageLayout title={title} onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground font-inter">
            Access all downloadable resources and materials here.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src={url}
              className="w-full h-[600px] bg-card"
              title="Downloads"
            />
          </div>
        </div>
      </BotMessage>
    </PageLayout>
  );
};

export default DownloadsView;
