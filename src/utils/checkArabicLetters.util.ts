export const checkArabicLetters = (str: string) => {
  const regex = /^[\u0621-\u064A\s\p{P}\p{N}]+$/u
  return regex.test(str)
}
