import { useState, useEffect } from 'react'
import { Socials } from '../'
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
      <div className='home-greeting'>
        <h3>Hello, {greeting} !!!</h3>
      </div>
      <div className='home-intro'>
        <h1 className='home-name'>Sam Azevedo</h1>
        <h3>Front-end Web Developer </h3>
      </div>
      <div className='home-info'>
        <Socials />
        <div className='home-btn'>
          <div>
            <a href='#projects'>
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
          more &rarr; <a href='#about'>about me</a>
        </p>
      </div>
    </div>
  )
}
