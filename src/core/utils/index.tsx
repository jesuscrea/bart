export function capitalize(word = ''): string {
  const [firstLetter] = word as any;
  return firstLetter ? firstLetter.toUpperCase().concat(word.slice(1)) : '';
}

export function formClassName(...classNamePieces: Array<string>): string {
  return classNamePieces.join('');
}
