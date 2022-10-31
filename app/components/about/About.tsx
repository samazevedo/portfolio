import html from '../../assets/icons/stack/html5.svg'
import css from '../../assets/icons/stack/css3.svg'
import sass from '../../assets/icons/stack/sass.svg'
import styledcomponent from '../../assets/icons/stack/styledcomponents.svg'
import javascript from '../../assets/icons/stack/javascript.svg'
import typescript from '../../assets/icons/stack/typescript.svg'
import react from '../../assets/icons/stack/react.svg'
import nextjs from '../../assets/icons/stack/nextdotjs.svg'
import nodejs from '../../assets/icons/stack/nodedotjs.svg'
import express from '../../assets/icons/stack/express.svg'
import mongodb from '../../assets/icons/stack/mongodb.svg'
import threejs from '../../assets/icons/stack/threedotjs.svg'
import Image from 'next/image'

const stackItems = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Three.js',
    icon: threejs,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Styled Components',
    icon: styledcomponent,
  },
]

export default function About() {
  return (
    <div id='about'>
      <h1>About</h1>
      <div>
        <p>
          Hello there, my name is Samuel Azevedo, you can call me Sam. I am a
          Front-end Web Developer based in Sao Paulo, Brazil. I'm currently
          focus on developing and create beautiful and intuitive web
          appliacations, making use of clean, responsive designs and reusable
          code. My main goal is to work with ReactJS. I'm also learning how to
          make use of WebGL, also tools like ThreeJS and React Three Fiber to
          use 3D animation for the web. I have a variety of interests from
          animations, graphic design, gaming, photography to sports like soccer
          basketball.
        </p>
      </div>
      <h3>Some of the tools I use</h3>
      <ul className='about-stack-list'>
        {stackItems.map((item) => (
          <li key={item.name}>
            <Image src={item.icon} alt={item.name} width={30} height={30} />
          </li>
        ))}
      </ul>
    </div>
  )
}
