import { MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-coastal text-white py-3 md:py-4 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
          <span className="text-base md:text-lg font-medium">CaliforniaOceanViews.com</span>
        </div>
      </div>
    </header>
  );
};