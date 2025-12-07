import PageLayout from "./PageLayout";
import BotMessage from "./BotMessage";

interface GalleryViewProps {
  onBack: () => void;
  onHome: () => void;
  isOffCampus?: boolean;
}

const GalleryView = ({ onBack, onHome, isOffCampus = false }: GalleryViewProps) => {
  const url = isOffCampus 
    ? "https://consouium.festie.app/gallery"
    : "https://consouium.festie.app/gallery";

  const title = isOffCampus ? "Off-Campus Gallery" : "Event Gallery";

  return (
    <PageLayout title={title} onBack={onBack} onHome={onHome}>
      <BotMessage>
        <div className="space-y-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground font-inter">
            Browse through photos and memories from the event.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src={url}
              className="w-full h-[600px] bg-card"
              title="Gallery"
            />
          </div>
        </div>
      </BotMessage>
    </PageLayout>
  );
};

export default GalleryView;
