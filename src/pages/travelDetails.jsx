import { useParams, useNavigate } from "react-router-dom";
import travelData from "../components/travelData.json";
import "../App.css";

function getRegion(country) {
  const europe = ["Spain", "Netherlands", "Belgium", "France", "Germany"];
  const caribbean = ["Puerto Rico"];

  if (europe.includes(country)) return "Europe";
  if (caribbean.includes(country)) return "Caribbean";
  return "Travel";
}

export default function TravelDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const place = travelData.find((item) => item.slug === slug);

  if (!place) {
    return (
      <div className="travel-details-wrapper">
        <button className="back-fab" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 style={{ marginTop: "120px" }}>Destination not found.</h1>
      </div>
    );
  }

  const heroPhoto = place.photos[0]?.url || "";
  const region = getRegion(place.country);

  return (
    <div className="travel-details-wrapper">
      <button className="back-fab" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div
        className="details-hero"
        style={{ backgroundImage: `url(${heroPhoto})` }}
      >
        <div className="details-hero-overlay">
          <p className="details-label">{region.toUpperCase()}</p>
          <h1 className="details-hero-title">
            {place.city}, {place.country}
          </h1>
          <p className="details-meta">
            {place.year} • Photo journal
          </p>
        </div>
      </div>

      <div className="details-main">
        <article className="details-article">
          <h2 className="details-section-title">Trip Story</h2>
          <p className="details-story">
            {place.story}
          </p>

          <h2 className="details-section-title">Gallery</h2>
          <div className="details-gallery">
            {place.photos.map((photo, index) => (
              <figure key={index} className="details-gallery-item">
                <img src={photo.url} alt={photo.caption} />
                {photo.caption && (
                  <figcaption>{photo.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </article>

        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3>Trip Snapshot</h3>
            <ul>
              <li>
                <span className="label">Location: </span>
                <span>{place.city}, {place.country}</span>
              </li>
              <li>
                <span className="label">Region: </span>
                <span>{region}</span>
              </li>
              <li>
                <span className="label">Year: </span>
                <span>{place.year}</span>
              </li>
              <li>
                <span className="label">Photos taken: </span>
                <span>{place.photos.length}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
