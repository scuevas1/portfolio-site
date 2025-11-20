import { useNavigate } from "react-router-dom";

export default function TravelCard({ place }) {
  const navigate = useNavigate();

  return (
    <div
      className="travel-card"
      onClick={() => navigate(`/travel/${place.slug}`)}
    >
      <div className="travel-card-image">
        <img src={place.photos[0].url} alt={place.country} />
      </div>

      <div className="travel-card-body">
        <h2>{place.country}</h2>
        <p className="travel-card-city">{place.city}</p>
        <p className="travel-card-year">{place.year}</p>
        <p className="travel-card-preview">
          {place.story.substring(0, 80)}...
        </p>
      </div>
    </div>
  );
}
