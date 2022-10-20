export const getDigits = (str: string): string => {
  return str.replaceAll(' ', '').slice(-4)
}
