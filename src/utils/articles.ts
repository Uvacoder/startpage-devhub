export const filterMediumDescription = (description: string) => {
  let filtered = description.split(/<p class=\"medium-feed-snippet\">/)[1];
  filtered = filtered.split(/<\/p>/)[0];
  return filtered;
};
