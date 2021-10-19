import React, { useState } from 'react'
import { validateNumberStringInput } from './validateNumberStringInput'
import { FormInputLabel } from '../types/FormInputLabel'
import { getFormInputConstants } from './getFormInputConstants'



type UseFormInput = {
    unit: string,
    errorMessage: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const useFormInput = (label: FormInputLabel, onChange: (newValue: string) => void): UseFormInput => {

    const [inputConstants] = useState(getFormInputConstants(label))
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = event.target.value
        const dataIsNumber = validateNumberStringInput(data, inputConstants.unit)
        if (dataIsNumber) {
            onChange(data)
            const dataAsNumber = parseFloat(data)
            if (dataAsNumber > inputConstants.maxValue) setErrorMessage(inputConstants.errorMessage) 
            else setErrorMessage('')
        }
    }

    return {
        unit: inputConstants.unit,
        errorMessage: errorMessage,
        handleChange: handleChange
    }


}