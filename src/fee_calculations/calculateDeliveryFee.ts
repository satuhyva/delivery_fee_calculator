import { CalculatorInput } from '../types/CalculatorInput'


const SMALL_VALUE_LIMIT = 10
const BASE_DISTANCE = 1000
const EXTRA_FOR_BASE_DISTANCE = 2
const ADDITIONAL_DISTANCE = 500
const EXTRA_FOR_ADDITIONAL_DISTANCE = 1
const AMOUNT_LIMIT = 5
const AMOUNT_EXTRA = 0.5
const MAX_FEE = 15
const NO_FEE_LIMIT = 100     
const RUSH_DAY = 'Fri'
const RUSH_START_HOUR = 15
const RUSH_END_HOUR = 19  
const RUSH_MULTIPLIER = 1.1                  


export const calculateDeliveryFee = (input: CalculatorInput): number => {

    const { cartValueEuros, deliveryDistanceMeters, amountItems, time} = input

    if (cartValueEuros >= NO_FEE_LIMIT) return 0

    let fee = 0
    fee += calculateSmallValueExtra(cartValueEuros, SMALL_VALUE_LIMIT)
    fee += calculateDistanceDependentExtra(
        deliveryDistanceMeters, BASE_DISTANCE, EXTRA_FOR_BASE_DISTANCE, ADDITIONAL_DISTANCE, EXTRA_FOR_ADDITIONAL_DISTANCE)   
    fee += calculateAmountDependentExtra(amountItems, AMOUNT_LIMIT, AMOUNT_EXTRA)
    fee +=  calculateTimeDependentExtra(time, RUSH_DAY, RUSH_START_HOUR, RUSH_END_HOUR, fee, RUSH_MULTIPLIER)
    return Math.min(fee, MAX_FEE)
}   



export const calculateSmallValueExtra = (cartValueEuros: number, limit: number): number => {
    if (cartValueEuros > limit || cartValueEuros < 0) return 0
    return parseFloat((limit - cartValueEuros).toFixed(3))
}


export const calculateDistanceDependentExtra = (
    deliveryDistanceMeters: number,
    baseDistance: number,
    baseExtra: number,
    additionalDistance: number,
    addtionalExtra: number
): number => {
    let extra = baseExtra
    let distance = deliveryDistanceMeters - baseDistance
    while (distance > 0) {
        extra += addtionalExtra
        distance -= additionalDistance
    }
    return extra
}


export const calculateAmountDependentExtra = (amountItems: number, amountLimit: number, amountExtra: number): number => {
    const numberAboveLimit = amountItems - amountLimit + 1
    if (numberAboveLimit > 0) {
        return numberAboveLimit * amountExtra
    }
    return 0
}


export const calculateTimeDependentExtra = (
    time: string, rushDay: string, rushStart: number, rushEnd: number, cumulatedFee: number, multiplier: number
): number => {

    const { day, hours } = getDateTimeComponents(time)
    if (day === rushDay) {
        if (hours >= rushStart && hours < rushEnd) {
            return parseFloat(((multiplier - 1) * cumulatedFee).toFixed(3))
        }
    }
    return 0
}


const getDateTimeComponents = (time: string): { day: string, hours: number } => {
    const split_1 = time.split(',')
    const day = split_1[0]
    const split_2 = split_1[1].trim().split(' ')
    const timeDetails = split_2[3]
    const split_3 = timeDetails.split(':')
    const hours = split_3[0]
    return { day: day, hours: parseInt(hours) }
}

