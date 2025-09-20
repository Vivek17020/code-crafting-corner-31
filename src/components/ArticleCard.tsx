import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string;
  isLarge?: boolean;
}

const CategoryColors: Record<string, string> = {
  "World": "bg-category-politics",
  "Sports": "bg-category-sports", 
  "Business": "bg-category-business",
  "Science": "bg-category-science",
  "Politics": "bg-category-politics",
  "General": "bg-muted",
};

const ArticleCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  readTime, 
  author, 
  publishedAt,
  isLarge = false 
}: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className={isLarge ? "md:flex" : ""}>
        <div className={`relative ${isLarge ? "md:w-1/2" : ""}`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          <Badge 
            className={`absolute top-3 left-3 ${CategoryColors[category] || 'bg-muted'} text-white`}
          >
            {category}
          </Badge>
        </div>
        
        <CardContent className={`p-4 ${isLarge ? "md:w-1/2" : ""}`}>
          <h3 className={`font-bold mb-2 line-clamp-2 ${isLarge ? "text-xl" : "text-base"}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-3">
              <span>{publishedAt}</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ArticleCard;