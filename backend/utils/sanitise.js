// This utility function will sanitise and format any string so that it can be used in an SQL query safely.

const sanitise = (inputString) => {
  const sanitisedWords = inputString
    .toLowerCase()
    .replaceAll(";", "")
    .split(" ");
  const capitalised = sanitisedWords.map((word) => word[0].toUpperCase());

  return sanitisedWords
    .map((word, index) => {
      return `${capitalised[index]}${word.substring(1)}`;
    })
    .join(" ");
};

console.log(sanitise("spring greens"));

module.exports = sanitise;
