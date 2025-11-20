import { useParams } from "react-router-dom";
import travelData from "../data/travelData.json";

export default function TravelDetails() {
  const { slug } = useParams();
  const place = travelData.find((p) => p.slug === slug);

  if (!place) return <h2>Destination not found</h2>;

  return (
    <div className="travel-details">
      <section
        className="travel-details-hero"
        style={{ backgroundImage: `url(${place.photos[0].url})` }}
      >
        <div className="travel-details-hero-overlay">
          <h1>{place.country}</h1>
          <p>{place.city} • {place.year}</p>
        </div>
      </section>

      <div className="travel-details-content">
        <h2>My Experience</h2>
        <p>{place.story}</p>
      </div>
    </div>
  );
}
