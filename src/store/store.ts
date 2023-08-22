import { proxy } from 'valtio'

export const state = proxy({
    isVisible: false,
    formData: {
        name: '',
        email: '',
        message: '',
    },
})

export const updateFormData = (data: Partial<typeof state.formData>) => {
    state.formData = { ...state.formData, ...data }
}
