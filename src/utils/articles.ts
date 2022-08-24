export const filterMediumDescription = (description: string) => {
  try {
    let filtered = description.split(/<p class=\"medium-feed-snippet\">/)[1];
    filtered = filtered.split(/<\/p>/)[0];
    return filtered;
  } catch {
    return '[Failed to load a description😓]';
  }
};
