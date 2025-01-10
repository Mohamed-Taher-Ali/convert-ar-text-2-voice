export function extractLastWord(text: string) {
  const arabicRegex = /[\u0600-\u06FF]+/g
  const words = text.match(arabicRegex) || []
  const lastWord = words.length ? words[words.length - 1] : ''

  return lastWord
}
