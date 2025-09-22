import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle the search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs md:text-sm text-muted-foreground mb-6 tracking-wide uppercase">
          Destination Travel Guides
        </p>
        
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-8 md:mb-12 leading-tight">
          California Hotels with<br />
          <span className="text-ocean">Ocean Views</span>
        </h1>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row bg-white rounded-full shadow-lg border border-border overflow-hidden">
            <div className="flex items-center pl-4 md:pl-6 pr-3 md:pr-4 py-3 sm:py-0">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-base md:text-lg py-3 md:py-4 px-2"
            />
            <Button 
              type="submit"
              className="bg-ocean hover:bg-ocean/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full m-2 text-sm md:text-base font-medium"
            >
              Go
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};