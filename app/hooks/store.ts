import create from 'zustand'

interface StateProps {
  router: string | null
  dom: React.ReactNode
}

const useStore = create<StateProps>()((set) => ({
  router: null,
  dom: null,
}))

export default useStore
