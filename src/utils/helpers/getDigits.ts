export const getDigits = (str: string): string => {
  return str
    .split('')
    .filter(el => el !== ' ')
    .join('')
    .slice(-4)
}
