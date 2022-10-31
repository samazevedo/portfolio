interface headerProps {
  children: React.ReactNode
}
export const Header = ({ children }: headerProps) => {
  return <header className='main-header'>{children}</header>
}
