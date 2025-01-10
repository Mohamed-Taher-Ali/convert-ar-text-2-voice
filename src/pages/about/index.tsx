import { Carousel } from 'antd'

const AboutPage = () => {
  return (
    <Carousel autoplay>
      {[
        'Natiq is now one of leading text -to- speech services',
        'We mainly focus on arabic text',
      ].map((content, ind) => (
        <h3
          key={ind}
          className="content-center h-[50vh] text-4xl font-bold text-white text-center bg-[#364d79]"
        >
          {content}
        </h3>
      ))}
    </Carousel>
  )
}

export default AboutPage
