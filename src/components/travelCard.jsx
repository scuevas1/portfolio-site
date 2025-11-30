import { useNavigate } from "react-router-dom";

export default function TravelCard({ place, index }) {
  const navigate = useNavigate();

  return (
    <div
      className="travel-card fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={() => navigate(`/travel/${place.slug}`)}
    >
      <img
        src={place.photos[0].url}
        alt={place.country}
        className="travel-card-img"
      />

      <div className="travel-card-body">
        <span className="travel-badge">{place.country}</span>
        <h2>{place.city}</h2>
        <p className="travel-card-year">{place.year}</p>
      </div>
    </div>
  );
}
