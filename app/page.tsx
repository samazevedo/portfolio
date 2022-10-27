import { Home, About, Projects, Contact } from './components/'

export default function Page() {
  return (
    <>
      <main className='text-center p-5'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
