import Banner from "../app/components/Banner";
import DestinationCard from "../app/components/DestinationCard";
import { destinations } from "./data/destinations";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
};


