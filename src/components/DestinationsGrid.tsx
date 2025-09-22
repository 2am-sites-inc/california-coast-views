import { DestinationCard } from "./DestinationCard";
import montereyImage from "@/assets/monterey-hero.jpg";
import bigSurImage from "@/assets/big-sur.jpg";
import santaBarbaraImage from "@/assets/santa-barbara.jpg";
import carmelImage from "@/assets/carmel.jpg";
import halfMoonBayImage from "@/assets/half-moon-bay.jpg";
import mendocinoImage from "@/assets/mendocino.jpg";

const destinations = [
  {
    title: "Monterey",
    image: montereyImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Monterey%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  },
  {
    title: "Big Sur",
    image: bigSurImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Big+Sur%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  },
  {
    title: "Santa Barbara",
    image: santaBarbaraImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Santa+Barbara%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  },
  {
    title: "Carmel-by-the-Sea",
    image: carmelImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Carmel-by-the-Sea%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  },
  {
    title: "Half Moon Bay",
    image: halfMoonBayImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Half+Moon+Bay%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  },
  {
    title: "Mendocino",
    image: mendocinoImage,
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Mendocino%2C+California%2C+United+States&checkin=2024-12-01&checkout=2024-12-02&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure&selected_currency=USD&nflt=hotelfacility%3D50%3Bclass%3D4%2C5%3B"
  }
];

export const DestinationsGrid = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-8 md:mb-12">
          Popular ocean view hotel destinations
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              title={destination.title}
              image={destination.image}
              bookingUrl={destination.bookingUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};