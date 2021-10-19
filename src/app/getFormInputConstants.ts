import { FormInputConstants } from '../types/FormInputConstants'
import { FormInputLabel } from '../types/FormInputLabel'


export const MAX_CART_VALUE = 10000
export const MAX_DISTANCE = 15000
export const MAX_AMOUNT_ITEMS = 500


export const getFormInputConstants = (label: FormInputLabel): FormInputConstants => {
    switch (label) {
    case 'Cart value':
        return {
            unit: '€',
            label: label,
            maxValue: MAX_CART_VALUE,
            errorMessage: `Maximum allowed cart value is ${MAX_CART_VALUE}€`
        }
    case 'Delivery distance':
        return {
            unit: 'm',
            label: label,
            maxValue: MAX_DISTANCE,
            errorMessage: `Maximum allowed delivery distance is ${MAX_DISTANCE}m`
        }
    case 'Amount of items':
        return {
            unit: '',
            label: label,
            maxValue: MAX_AMOUNT_ITEMS,
            errorMessage: `Maximum allowed amount of items is ${MAX_AMOUNT_ITEMS}`
        }
    default:
        throw new Error('Form input label not recognized!')
    }
}