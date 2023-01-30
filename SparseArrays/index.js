function matchingStrings(strings, queries) {
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;

    for (let x = 0; x < strings.length; x++) {
      if (strings[x] === queries[i]) {
        count++;
      }
    }

    results.push(count);
  }

  return results;
}
