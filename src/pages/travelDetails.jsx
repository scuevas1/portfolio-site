import { useParams } from "react-router-dom";
import travelData from "../components/travelData.json";

export default function TravelDetails() {
  const { slug } = useParams();
  const place = travelData.find((p) => p.slug === slug);

  if (!place) return <div>Destination not found</div>;

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
        <div className="travel-details-story">
          <h2>My Experience</h2>
          <p>{place.story}</p>
        </div>
      </div>

      <div className="travel-photo-stack">
        {place.photos.map((photo, i) => (
            <div key={i} className="photo-stack-item">
            <img src={photo.url} alt={photo.caption} />
            <p className="photo-caption">{photo.caption}</p>
            </div>
        ))}
      </div>

    </div>
  );
}

