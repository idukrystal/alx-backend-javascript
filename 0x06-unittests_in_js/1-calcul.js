function calculateNumber(type, a, b) {
  const ar = Math.round(a);
  const br = Math.round(b);
  switch(type) {
  case "SUM": return ar + br;
  case "SUBTRACT": return ar - br;
  case "DIVIDE":
    if (br == 0) return 'Error';
    return ar / br;
  }
}

module.exports = calculateNumber;
