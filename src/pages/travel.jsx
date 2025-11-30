import { useState } from "react";
import travelData from "../components/travelData.json";
import TravelCard from "../components/travelCard";
import { filterAndSort } from "../utils/travel";
import "../App.css";

export default function Travel() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredData = filterAndSort(travelData, search, sortOrder);

  return (
    <div className="travel-page">

      <div className="travel-hero">
        <h1>Travel Gallery</h1>
        <p>Places I’ve explored and photographed around the world</p>
      </div>

      <div className="travel-controls">
        <input
          className="travel-search"
          placeholder="Search by country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="travel-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Newest</option>
          <option value="asc">Oldest</option>
        </select>
      </div>

      <div className="travel-grid">
        {filteredData.map((place, i) => (
          <TravelCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
