import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import { validateNumberStringInput } from './validateNumberStringInput'
import { FormInputLabel } from '../types/FormInputLabel'
import { getFormInputConstants } from './getFormInputConstants'
import { useStyles } from '../styles/styles'



type FormInputProps = {
    currentValue: string
    label: FormInputLabel,
    onChange: (newValue: string) => void,
}

const FormInput: React.FC<FormInputProps> = ({ currentValue, label, onChange }) => {

    const [inputConstants] = useState(getFormInputConstants(label))
    const [errorMessage, setErrorMessage] = useState('')
    const classes = useStyles()
    
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

    return (
        <div className={classes.containerWithTopMargin}>
            <FormControl  variant='outlined'>
                <TextField
                    id={`input-${label}`}
                    error={errorMessage !== ''}
                    value={currentValue}
                    label={inputConstants.label}
                    variant='outlined'
                    style={{ width: 350 }}
                    InputProps={{ endAdornment: <Typography>{inputConstants.unit}</Typography> }}
                    helperText={errorMessage}
                    onChange={handleChange}
                />              
            </FormControl>
        </div>
    )
}
export default FormInput

