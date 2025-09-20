import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import ArticleCard from "@/components/ArticleCard";
import { mockArticles } from "@/data/mockArticles";

const Index = () => {
  const featuredArticle = mockArticles[0];
  const otherArticles = mockArticles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNews />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        <div className="mb-8">
          <ArticleCard {...featuredArticle} isLarge={true} />
        </div>

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
