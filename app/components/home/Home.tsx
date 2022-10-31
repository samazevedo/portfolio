import { useState, useEffect } from 'react'
// import BGImage from '../BGImage/BGImage'
// import Typewritter from 'typewriter-effect'
// import { gsap } from 'gsap'

export const Home = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    const changeGreeting = () => {
      const currentHour = new Date().getHours()
      if (currentHour < 12) {
        setGreeting('Good Morning')
      } else if (currentHour < 18) {
        setGreeting('Good Afternoon')
      } else {
        setGreeting('Good Evening')
      }
    }
    changeGreeting()
  }, [])

  return (
    <div id='home'>
      <h2>Hello, {greeting} !!!</h2>
      <div className='home-intro'>
        <h1 className='home-name'>Sam Azevedo</h1>
        <h2>Front-end Web Developer </h2>
      </div>
      <div className='home-info'>
        <div>
          <div>
            <a href='#portfolio'>
              <button>see my work</button>
            </a>
          </div>
          <div>
            <a href='#contact'>
              <button>get in touch</button>
            </a>
          </div>
        </div>

        <p>
          Click here to know more <a href='#about'>about me</a>
        </p>
      </div>
    </div>
  )
}
