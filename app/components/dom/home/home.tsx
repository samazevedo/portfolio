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
      <div className='home-greeting'>
        <h3>Hello, {greeting} !!!</h3>
      </div>
      <div className='home-intro'>
        <h1 >Sam Azevedo</h1>
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
	& .home-greeting {
		font-size:${({theme})=> theme.size.xs};
		align-self: end;
	}
	& .home-intro {
		align-self: center;
		& h3 {
			font-size:${({theme})=> theme.size.xs};
		}
	}
	& .home-info {
		width:100%;
		display: grid;
		align-self: start;
		justify-items:center;
		grid-template-rows:: 1fr 1fr 1fr;
	}
	& .home-btn {
		width:100%;
		max-width:60rem;
		display:grid;
		grid-template-columns: repeat(2,1fr);
		align-items:center;
		justify-items:center;
	}
	& .home-more {
		margin-top:2rem;
	}
`