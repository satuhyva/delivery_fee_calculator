export const validateNumberStringInput = (text: string, unit: string): boolean => {
    const numbersRegex = '^[0-9]{0,5}$'
    const currencyRegex = '^[0-9]*[.,]?[0-9]{0,2}$'  
    return new RegExp(unit === '€' ? currencyRegex : numbersRegex).test(text) 
}