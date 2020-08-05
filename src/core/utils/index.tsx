export function capitalize(word = ''): string {
  const [first, ...rest] = word.slice();
  return first.toUpperCase().concat(...rest);
}

export function formClassName(...classNamePieces: Array<string>): string {
  return classNamePieces.join('');
}
