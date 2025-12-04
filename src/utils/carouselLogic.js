export function getVisibleIndices(current, total) {
  const left = (current - 1 + total) % total;
  const right = (current + 1) % total;
  return { left, right };
}

export function scrollToCard(trackRef, cardIndex) {
  if (!trackRef.current) return;
  const card = trackRef.current.children[cardIndex];
  if (card) {
    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}
