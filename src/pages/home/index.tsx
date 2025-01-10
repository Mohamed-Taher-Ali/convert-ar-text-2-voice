import { useNavigate } from 'react-router-dom'
import { Alert, Button, Flex } from 'antd'
import { Fragment } from 'react'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Alert
        showIcon
        type="success"
        message={
          <p className="text-xl font-bold text-gray-800">New Era of AI</p>
        }
        description={
          <Flex vertical gap={4}>
            {[
              'Now you can access our new service Natiq with all new features.',
              'if you need to get voice from your arabic text, here is the suitable place to do that',
              'just drop your arabic text and enjoy listening to it anyway you go',
            ].map((content, ind) => (
              <p key={ind} className="text-lg md:text-xl text-gray-600">
                - {content}
              </p>
            ))}
          </Flex>
        }
      />
      <Button
        size="large"
        type="primary"
        className="mt-4"
        onClick={() => navigate('natiq')}
      >
        Try it now ..
      </Button>
    </Fragment>
  )
}

export default HomePage
