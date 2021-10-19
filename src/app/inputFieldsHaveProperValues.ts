import { MAX_CART_VALUE, MAX_DISTANCE, MAX_AMOUNT_ITEMS } from './getFormInputConstants'


export const inputFieldsHaveProperValues = (
    cartValue: string, 
    deliveryDistance: string, 
    amountItems: string, 
    dateTime: Date | null
): boolean => {
    if (!cartValue || parseFloat(cartValue.replace(',', '.')) > MAX_CART_VALUE || cartValue === '0') return false
    if (!deliveryDistance || parseInt(deliveryDistance) > MAX_DISTANCE || deliveryDistance === '0') return false
    if (!amountItems || parseInt(amountItems) > MAX_AMOUNT_ITEMS || amountItems === '0') return false
    if (!dateTime || dateTime < new Date()) return false
    return true
}