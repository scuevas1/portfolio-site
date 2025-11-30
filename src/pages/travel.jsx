import { useState } from "react";
import { Link } from "react-router-dom";
import travelData from "../components/travelData.json";
import "../App.css";

export default function Travel() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredData = travelData
    .filter(item =>
      item.country.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.year - b.year : b.year - a.year
    );

  return (
    <div className="travel-page">

      <div className="travel-hero">
        <h1>Travel</h1>
        <p>Photo journals & memories from around the world</p>
      </div>

      <div className="travel-controls">
        <input
          className="travel-search"
          placeholder="Search country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="travel-select"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div className="travel-grid">
        {filteredData.map((place) => (
          <Link to={`/travel/${place.slug}`} key={place.id} className="travel-card">
            <img src={place.photos[0].url} alt={place.city} className="travel-img" />
            <div className="travel-overlay">
              <h2>{place.city}</h2>
              <p>{place.country}</p>
              <span>{place.year}</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
