import { useNavigate } from "react-router-dom";

export default function TravelCard({ place }) {
  const navigate = useNavigate();

  return (
    <div
      className="travel-card"
      onClick={() => navigate(`/travel/${place.slug}`)}
    >
      <img src={place.photos[0].url} className="travel-img" />

      <div className="travel-overlay">
        <h2>{place.city}, {place.country}</h2>
        <p>{place.year}</p>
        <span>View trip →</span>
      </div>
    </div>
  );
}
