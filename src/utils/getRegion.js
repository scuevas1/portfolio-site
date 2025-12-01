export function getRegion(country) {
  const europe = ["Spain", "Netherlands", "Belgium", "France", "Germany"];
  const caribbean = ["Puerto Rico"];

  if (europe.includes(country)) return "Europe";
  if (caribbean.includes(country)) return "Caribbean";
  return "Other";
}
