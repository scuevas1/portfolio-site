import { useState } from "react";

export default function Travel() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredData = travelData
    .filter(p => p.country.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortOrder === "asc" ? a.year - b.year : b.year - a.year);

  return (
    <div className="travel-page">
      <h1>Travel</h1>

      <input 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="desc">Newest</option>
        <option value="asc">Oldest</option>
      </select>

      <div className="travel-grid">
        {filteredData.map(place => (
          <div key={place.id}>{place.country}</div>
        ))}
      </div>
    </div>
  );
}
