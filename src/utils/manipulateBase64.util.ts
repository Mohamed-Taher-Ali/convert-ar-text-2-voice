export function convertSafeB64ToBase64(str: string) {
  return str
    .replace(/-/g, '+') // Replace '-' with '+'
    .replace(/_/g, '/') // Replace '_' with '/'
}

export const getMediaUrlFromBase64 = async (base64: string) => {
  const path = `data:audio/mp3;base64, ${base64}`

  const response = await fetch(path)
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)

  return url
}
