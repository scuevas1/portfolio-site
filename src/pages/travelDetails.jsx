import travelData from "../data/travelData.json";
import { useParams } from "react-router-dom";

export default function TravelDetails() {
  const { slug } = useParams();
  const place = travelData.find((p) => p.slug === slug);

  if (!place) return <h2>Not found</h2>;

  return (
    <div className="travel-details">
      <h1>{place.country}</h1>
      <h3>{place.city} • {place.year}</h3>
      <p>{place.story}</p>

      <div className="travel-photos">
        {place.photos.map((img, i) => (
          <img key={i} src={img.url} alt={img.caption} />
        ))}
      </div>
    </div>
  );
}
