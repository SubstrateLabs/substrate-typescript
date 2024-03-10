export function randomString(length: number): string {
  const alphabet: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  let randomString: string = "";
  for (let i = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
  return randomString;
}

// Generates incrementing ids, for better legibility
export function idGenerator(prefix: string, start: number = 1): any {
  let n = start;
  return () => {
    const id = `${prefix}${n.toString()}_${randomString(8)}`;
    n = n + 1;
    return id;
  };
}
