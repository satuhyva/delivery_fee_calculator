import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import FormInput from './FormInput'
import DateTimeInput from './DateTimeInput'
import { getDefaultDateTime } from './getDefaultDateTime'
import Button from '@mui/material/Button'
import { useStyles } from '../styles/styles'
import { CalculatorInput } from '../types/CalculatorInput'
import { calculateDeliveryFee } from '../fee_calculations/calculateDeliveryFee'



const App = () => {

    const [cartValue, setCartValue] = useState('')
    const [deliveryDistance, setDeliveryDistance] = useState('')
    const [amountItems, setAmountItems] = useState('')
    const [dateTime, setDateTime] = useState<Date | null>(getDefaultDateTime(new Date()))
    const [deliveryFee, setDeliveryFee] = useState<number | undefined>(undefined)
    const classes = useStyles()

    useEffect(() => {
        if (deliveryFee) setDeliveryFee(undefined)
    },[cartValue, deliveryDistance, amountItems, dateTime])

    const calculateFee = () => {
        if (!dateTime) return
        const calculatorInput: CalculatorInput = {
            cartValueEuros: parseFloat(cartValue),
            deliveryDistanceMeters: parseInt(deliveryDistance),
            amountItems: parseInt(amountItems),
            time: dateTime.toUTCString()
        }
        const result = calculateDeliveryFee(calculatorInput)
        setDeliveryFee(result)
    }

    const allFieldsHaveValues = () => {
        return cartValue && deliveryDistance && amountItems && dateTime
    }




    return (
        <div className={classes.appContainer}>

            <Typography variant='h5'><strong>DELIVERY FEE CALCULATOR</strong></Typography>

            <FormInput
                currentValue={cartValue}
                label='Cart value'
                onChange={setCartValue}
            />
            <FormInput
                currentValue={deliveryDistance}
                label='Delivery distance'
                onChange={setDeliveryDistance}
            />
            <FormInput
                currentValue={amountItems}
                label='Amount of items'
                onChange={setAmountItems}
            />
            <DateTimeInput
                currentValue={dateTime}
                onChange={setDateTime}
            />

            <div className={classes.containerWithTopMargin}>
                <Button 
                    id='button-calculate'
                    variant='contained'
                    onClick={calculateFee}
                    disabled={!allFieldsHaveValues()}
                >
                    CALCULATE
                </Button>
            </div>  

            {deliveryFee !== undefined &&
                <div className={classes.containerWithTopMargin} id='calculated-fee'>
                    <Typography variant='h5'>
                        <strong>{`FEE is ${deliveryFee} €`}</strong>
                    </Typography>
                </div> 
            }   
     
        </div>
    )
}
export default App

