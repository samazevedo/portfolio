import create from 'zustand'
import shallow from 'zustand/shallow'

const useStoreImpl = create(() => {
  return {
    dom: null,
  }
})

const useStore = (sel: any) => useStoreImpl(sel, shallow)
Object.assign(useStore, useStoreImpl)

const { getState, setState } = useStoreImpl
export { getState, setState }
export default useStore
