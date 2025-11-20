import { useNavigate } from "react-router-dom";

export default function TravelCard({ place }) {
  const navigate = useNavigate();

  return (
    <div className="travel-card" onClick={() => navigate(`/travel/${place.slug}`)}>
      <img src={place.photos[0].url} alt={place.country} />
      <h3>{place.country}</h3>
      <p>{place.city}</p>
    </div>
  );
}
