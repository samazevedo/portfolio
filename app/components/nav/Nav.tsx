import NavLink from './nav-link'

export const Nav = () => {
  return (
    <ul className='grid gap-2 grid-cols-3 text-sm'>
      {/* <li>
        <a href='#home'>Home</a>
      </li> */}
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  )
}
