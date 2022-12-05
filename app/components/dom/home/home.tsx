import { useState, useEffect } from 'react'
import { Socials } from '../socials/socials'
import styled from 'styled-components'

export default function Home() {
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
    <HomeStyled id='home'>
      <div className='home-intro'>
				<div className='home-greeting'>
        	<p>Hello, {greeting} !!!</p>
      	</div>
				<div className='home-greeting-name'>
	        <h1>Sam Azevedo</h1>
				</div>
				<div className='home-greeting-title'>
        	<h4>Front-end Web Developer </h4>
				</div>
      </div>
      <div className='home-info'>
        <Socials />
        <div className='home-btn-section'>
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
				<div className='home-more'>
					<p>
          More &rarr; <a href='#about'>about me</a>
        	</p>
				</div>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.section`
	width:100%;
	height:100%;
	display:grid;
	justify-items:center;
	& .home-intro {
		display: grid;
		justify-items:center;
		& .home-greeting {
			align-self: end;
		}
		& .home-greeting-name {
			align-self: end;
		}
	}
	& .home-btn-section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 3rem;
		align-items:center;
		justify-items:center;
	}

`