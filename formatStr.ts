function formatter(str: string) {
  let normalised = str.trim().toLowerCase();
  return normalised.slice(0, 1).toUpperCase() + normalised.slice(1);
}

console.log(formatter('  viAChesLaV  '));
