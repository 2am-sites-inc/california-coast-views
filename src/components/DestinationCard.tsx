interface DestinationCardProps {
  title: string;
  image: string;
  bookingUrl: string;
}

export const DestinationCard = ({ title, image, bookingUrl }: DestinationCardProps) => {
  return (
    <a 
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={`${title} ocean view hotels`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-semibold drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};