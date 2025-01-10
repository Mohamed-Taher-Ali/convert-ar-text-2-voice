type IRet = {
  wave: string
  durations: [string, number, number]
}

type IParams = {
  text: string
} & Pick<RequestInit, 'signal'>

export const getB64VoiceFromText = ({
  text,
  ...opts
}: IParams): Promise<IRet> => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const requestOptions = {
    ...opts,
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ text }),
    redirect: 'follow' as RequestRedirect,
  }

  return fetch('https://echo-6sdzv54itq-uc.a.run.app/natiq', requestOptions)
    .then((response) => response.json())
    .then((response: IRet) => response)
}
