import React from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormInputLabel } from '../types/FormInputLabel'
import { useStyles } from '../styles/styles'
import { useFormInput } from './useFormInput'


type FormInputProps = {
    currentValue: string
    label: FormInputLabel,
    onChange: (newValue: string) => void,
}

const FormInput: React.FC<FormInputProps> = ({ currentValue, label, onChange }) => {


    const { unit, errorMessage, handleChange } = useFormInput(label, onChange)
    const classes = useStyles()

    return (
        <div className={classes.containerWithTopMargin}>
            <TextField
                id={`input-${label}`}
                error={errorMessage !== ''}
                value={currentValue}
                label={label}
                variant='outlined'
                className={classes.inputField}
                InputProps={{ endAdornment: <Typography>{unit}</Typography> }}
                helperText={errorMessage}
                onChange={handleChange}
            />              
        </div>
    )
}
export default FormInput

