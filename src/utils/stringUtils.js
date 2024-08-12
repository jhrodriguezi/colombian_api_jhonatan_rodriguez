const sanitizeForId = (label) => {
  if (typeof label !== "string") {
    throw new Error("label must be a string");
  }

  return label
    .toLowerCase()
    .replace(/[^\w\s]|(\s+)/g, (_match, group1) => (group1 ? "-" : ""));
};

export { sanitizeForId };