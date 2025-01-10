import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Button, Flex, Input, message, Spin } from 'antd'

import {
  extractLastWord,
  checkArabicLetters,
  getMediaUrlFromBase64,
  convertSafeB64ToBase64,
} from 'src/utils'
import { getB64VoiceFromText } from 'src/services'

const { TextArea } = Input
let controller: any

const NatiqPage = () => {
  const [isConverting, setConverting] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [voice, setVoice] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    controller = new AbortController()
    return function () {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    if (voice && audioRef.current) {
      audioRef.current.play()
    }
  }, [voice])

  const onConvert = useCallback(() => {
    const lastWord = extractLastWord(text)
    const repeatedLastWord = Array.from({ length: 2 }).fill(lastWord).join(' ')
    const updatedText = `${text} ${repeatedLastWord}`
    setConverting(true)

    getB64VoiceFromText({ text: updatedText, signal: controller.signal })
      .then(async ({ wave }) => {
        const base64Str = convertSafeB64ToBase64(wave)
        const url = await getMediaUrlFromBase64(base64Str)
        setVoice(url)
      })
      .catch((error) => {
        message.error({
          content: error.message || error,
          type: 'error',
        })
      })
      .finally(() => setConverting(false))
  }, [text])

  const onChangeText = useCallback(({ currentTarget: { value } }: any) => {
    const isCorrectFormat = checkArabicLetters(value)
    const pass = (isCorrectFormat && !isConverting) || !value

    pass && setText(value)
  }, [])

  return (
    <Fragment>
      <TextArea
        dir="rtl"
        showCount
        value={text}
        maxLength={200}
        onChange={onChangeText}
        placeholder="أكتب النص العربى هنا ..."
        style={{ height: 180, padding: '12px', resize: 'none' }}
      />
      <Flex vertical gap={32} align="center" className="my-8">
        <Button
          disabled={isConverting || !text}
          className="font-bold"
          onClick={onConvert}
          type="primary"
          size="large"
        >
          Convert Text To Voice
        </Button>
        <audio ref={audioRef} src={voice} controls />
        {isConverting && <Spin />}
      </Flex>
    </Fragment>
  )
}

export default NatiqPage
