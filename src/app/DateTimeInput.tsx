import React from 'react'
import DateTimePicker from '@mui/lab/DateTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TextField } from '@mui/material'
import { useStyles } from '../styles/styles'



type DateTimeInputProps = {
    currentValue: Date | null
    onChange: (newValue: Date | null) => void,
}


const DateTimeInput: React.FC<DateTimeInputProps> = ({ currentValue, onChange }) => {

    const classes = useStyles()
    const errorMessage = currentValue && currentValue <= new Date() ?
        'Only time points in future are allowed' : ''

    return (
        <div className={classes.containerWithTopMargin}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => 
                        <TextField 
                            {...props} 
                            id='input-Date and time'
                            className={classes.inputField}
                            helperText={errorMessage ? errorMessage : ''}
                        />}
                    label='Date and Time'
                    value={currentValue}
                    onChange={onChange}
                    minDateTime={new Date()}
                />  
            </LocalizationProvider>
        </div>
    )
}
export default DateTimeInput