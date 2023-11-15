import { Typewriter } from 'react-simple-typewriter'

const TypeWritter = () => {
  return (
    <div className='App'>
      <h3 style={{ fontWeight: 'thin', textTransform:'uppercase', fontSize:'16px' }}>
        I am{' '}
        <span>
          <Typewriter
            words={['Developer', 'Coder', 'Web Designer', 'FreeLancer!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </span>
      </h3>
    </div>
  )
}
export default TypeWritter;