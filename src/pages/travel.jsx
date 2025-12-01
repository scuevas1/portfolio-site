import { useState } from "react";
import travelData from "../components/travelData.json";
import TravelCard from "../components/travelCard";
import "../App.css";

function getRegion(country) {
  const europe = ["Spain", "Netherlands", "Belgium", "France", "Germany"];
  const caribbean = ["Puerto Rico"];

  if (europe.includes(country)) return "Europe";
  if (caribbean.includes(country)) return "Caribbean";
  return "Other";
}

export default function Travel() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [region, setRegion] = useState("all");

  const filteredData = travelData
    .filter((item) => {
      const matchesSearch = item.country
        .toLowerCase()
        .includes(search.toLowerCase());
      const itemRegion = getRegion(item.country);
      const matchesRegion = region === "all" || itemRegion === region;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) =>
      sortOrder === "asc" ? a.year - b.year : b.year - a.year
    );

  const resultCount = filteredData.length;
  const sortLabel = sortOrder === "desc" ? "Newest first" : "Oldest first";

  return (
    <div className="travel-page">
      <div className="travel-hero">
        <h1>Travel Gallery</h1>
        <p>Places I’ve explored, photographed, and lowkey want to go back to.</p>
      </div>

      {/* control panel */}
      <div className="travel-controls">
        <div className="travel-controls-main">
          <div className="travel-search-group">
            <label className="travel-label">Search trips</label>
            <div className="travel-input-shell">
              <span className="travel-input-icon">🔍</span>
              <input
                className="travel-search"
                placeholder="Type a country... (Spain, Belgium, Puerto Rico)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="travel-sort-group">
            <span className="travel-label">Sort by</span>
            <div className="sort-toggle">
              <button
                type="button"
                className={
                  sortOrder === "desc" ? "sort-chip sort-chip-active" : "sort-chip"
                }
                onClick={() => setSortOrder("desc")}
              >
                Newest
              </button>
              <button
                type="button"
                className={
                  sortOrder === "asc" ? "sort-chip sort-chip-active" : "sort-chip"
                }
                onClick={() => setSortOrder("asc")}
              >
                Oldest
              </button>
            </div>
          </div>

          <div className="travel-region-group">
            <span className="travel-label">Region</span>
            <div className="region-chips">
              <button
                type="button"
                className={
                  region === "all" ? "region-chip region-chip-active" : "region-chip"
                }
                onClick={() => setRegion("all")}
              >
                All
              </button>
              <button
                type="button"
                className={
                  region === "Europe"
                    ? "region-chip region-chip-active"
                    : "region-chip"
                }
                onClick={() => setRegion("Europe")}
              >
                Europe
              </button>
              <button
                type="button"
                className={
                  region === "Caribbean"
                    ? "region-chip region-chip-active"
                    : "region-chip"
                }
                onClick={() => setRegion("Caribbean")}
              >
                Caribbean
              </button>
            </div>
          </div>
        </div>

        <div className="travel-meta">
          <span>
            Showing <strong>{resultCount}</strong>{" "}
            {resultCount === 1 ? "trip" : "trips"}
          </span>
          <span className="travel-dot">•</span>
          <span>{sortLabel}</span>
        </div>
      </div>

      <div className="travel-grid">
        {filteredData.map((place, i) => (
          <TravelCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
