import { Badge } from "@/components/ui/badge";

const BreakingNews = () => {
  return (
    <div className="bg-breaking text-breaking-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 text-sm">
          <Badge variant="secondary" className="bg-white text-breaking font-bold">
            BREAKING
          </Badge>
          <div className="flex-1 truncate">
            Aryan Khan's Debut Unites SRK, Salman & Aamir in Historic Bollywood Moment
          </div>
          <span className="text-xs opacity-80">1 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;