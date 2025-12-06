import { useState, useCallback } from "react";
import MainMenu from "@/components/MainMenu";
import LearnMoreView from "@/components/LearnMoreView";
import ResultsView from "@/components/ResultsView";
import LeaderboardView from "@/components/LeaderboardView";
import DownloadsView from "@/components/DownloadsView";
import GalleryView from "@/components/GalleryView";
import OffCampusMenu from "@/components/OffCampusMenu";

type ViewType = 
  | "main-menu" 
  | "learn-more" 
  | "results" 
  | "leaderboard" 
  | "downloads" 
  | "gallery"
  | "off-campus-menu"
  | "off-campus-results"
  | "off-campus-leaderboard"
  | "off-campus-downloads"
  | "off-campus-gallery";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("main-menu");
  const [viewHistory, setViewHistory] = useState<ViewType[]>([]);

  const navigate = useCallback((view: ViewType) => {
    setViewHistory((prev) => [...prev, currentView]);
    setCurrentView(view);
  }, [currentView]);

  const goBack = useCallback(() => {
    if (viewHistory.length > 0) {
      const newHistory = [...viewHistory];
      const previousView = newHistory.pop();
      setViewHistory(newHistory);
      setCurrentView(previousView || "main-menu");
    } else {
      setCurrentView("main-menu");
    }
  }, [viewHistory]);

  const goHome = useCallback(() => {
    setViewHistory([]);
    setCurrentView("main-menu");
  }, []);

  const getBackHandler = (isOffCampusSub: boolean = false) => {
    if (isOffCampusSub) {
      return () => {
        setViewHistory((prev) => prev.filter((v) => v !== "off-campus-menu"));
        setCurrentView("off-campus-menu");
      };
    }
    return goBack;
  };

  const renderView = () => {
    switch (currentView) {
      case "main-menu":
        return <MainMenu onNavigate={(view) => navigate(view as ViewType)} />;
      
      case "learn-more":
        return <LearnMoreView onBack={goBack} onHome={goHome} />;
      
      case "results":
        return <ResultsView onBack={goBack} onHome={goHome} />;
      
      case "leaderboard":
        return <LeaderboardView onBack={goBack} onHome={goHome} />;
      
      case "downloads":
        return <DownloadsView onBack={goBack} onHome={goHome} />;
      
      case "gallery":
        return <GalleryView onBack={goBack} onHome={goHome} />;
      
      case "off-campus-menu":
        return (
          <OffCampusMenu 
            onNavigate={(view) => navigate(view as ViewType)} 
            onBack={goBack} 
            onHome={goHome} 
          />
        );
      
      case "off-campus-results":
        return (
          <ResultsView 
            onBack={getBackHandler(true)} 
            onHome={goHome} 
            isOffCampus 
          />
        );
      
      case "off-campus-leaderboard":
        return (
          <LeaderboardView 
            onBack={getBackHandler(true)} 
            onHome={goHome} 
            isOffCampus 
          />
        );
      
      case "off-campus-downloads":
        return (
          <DownloadsView 
            onBack={getBackHandler(true)} 
            onHome={goHome} 
            isOffCampus 
          />
        );
      
      case "off-campus-gallery":
        return (
          <GalleryView 
            onBack={getBackHandler(true)} 
            onHome={goHome} 
            isOffCampus 
          />
        );
      
      default:
        return <MainMenu onNavigate={(view) => navigate(view as ViewType)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderView()}
    </div>
  );
};

export default Index;
