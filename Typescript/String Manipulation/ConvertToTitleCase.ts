// This function takes in a string, converts each word in that string to Title Case then returns the same string but with the updated Title Case words.
function ConvertToTitleCaseTS(text: string): string {
  let returnStr: string = "";

  const words: string[] = text.split(" ").map((word) =>
    // This function does not check for non-initial articles such as "a", "the" or "and" but that functionality can be added here if required
    word.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    })
  );

  words.map((word) => (returnStr = `${returnStr} ${word}`));

  return returnStr;
}
