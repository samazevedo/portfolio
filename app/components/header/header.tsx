interface headerProps {
  children: React.ReactNode
}
export default function Header({ children }: headerProps) {
  return <header className='main-header'>{children}</header>
}
