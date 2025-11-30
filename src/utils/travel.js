export function filterAndSort(data, search, sortOrder) {
  return data
    .filter(item =>
      item.country.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.year - b.year
        : b.year - a.year
    );
}
