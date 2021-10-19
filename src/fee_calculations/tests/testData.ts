import { CalculatorInput } from '../../types/CalculatorInput'


export const SMALL_CART_VALUE_DATA = [
    { cartValue: 2, limit: 10, expectedResult: 8 },
    { cartValue: 12, limit: 10, expectedResult: 0 },
    { cartValue: 10, limit: 10, expectedResult: 0 },
    { cartValue: 9.9, limit: 10.0, expectedResult: 0.1 },
    { cartValue: 2, limit: 20, expectedResult: 18 },
    { cartValue: 6.99, limit: 10, expectedResult: 3.01 },
    { cartValue: 0.12, limit: 10, expectedResult: 9.88 },
    { cartValue: 8.90, limit: 10, expectedResult: 1.10 },
]

export const DISTANCE_DATA = [
    { meters: 1000, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 2 },
    { meters: 1499, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 3 },
    { meters: 1500, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 3 },
    { meters: 1501, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 4 },
    { meters: 2000, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 4 },
    { meters: 2001, baseDistance: 1000, baseExtra: 2, additionalDistance: 500, additionalExtra: 1, expectedResult: 5 },
]

export const AMOUNT_ITEMS_DATA = [
    { amount: 4, amountLimit: 5, amountExtra: 0.5, expectedResult: 0 },
    { amount: 5, amountLimit: 5, amountExtra: 0.5, expectedResult: 0.5 },
    { amount: 10, amountLimit: 5, amountExtra: 0.5, expectedResult: 3 },
]

export const TIME_DATA = [
    { time: 'Thu, 14 Oct 2021 12:20:01 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 0 },
    { time: 'Thu, 14 Oct 2021 15:20:01 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 0 },
    { time: 'Fri, 15 Oct 2021 14:59:59 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 0 },
    { time: 'Fri, 15 Oct 2021 15:00:00 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 1 },
    { time: 'Fri, 15 Oct 2021 19:00:00 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 0 },
    { time: 'Fri, 15 Oct 2021 15:20:01 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 1 },
    { time: 'Fri, 15 Oct 2021 16:49:32 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 10, multiplier: 1.1, expectedResult: 1 },
    { time: 'Fri, 15 Oct 2021 18:23:01 GMT', rushDay: 'Fri', rushStart: 15, rushEnd: 19, cumulatedFee: 5, multiplier: 1.1, expectedResult: 0.5 }
]




export const DELIVERY_FEE_MAX_CART_LIMIT_DATA: { input: CalculatorInput, expectedResult: number }[] = [
    {
        input: {
            cartValueEuros: 99,
            deliveryDistanceMeters: 1000,
            amountItems: 1,
            time: 'Thu, 14 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 2
    },
    {
        input: {
            cartValueEuros: 100,
            deliveryDistanceMeters: 1678,
            amountItems: 2,
            time: 'Thu, 14 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 0
    },
    {
        input: {
            cartValueEuros: 101,
            deliveryDistanceMeters: 1678,
            amountItems: 2,
            time: 'Thu, 14 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 0
    },
]

export const DELIVERY_FEE_MAX_LIMIT_DATA: { input: CalculatorInput, expectedResult: number }[] = [
    {
        input: {
            cartValueEuros: 99,
            deliveryDistanceMeters: 5000,
            amountItems: 20,
            time: 'Fri, 15 Oct 2021 17:20:01 GMT'
        },
        expectedResult: 15
    },
    {
        input: {
            cartValueEuros: 1,
            deliveryDistanceMeters: 1000,
            amountItems: 30,
            time: 'Thu, 14 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 15
    },
    {
        input: {
            cartValueEuros: 5,
            deliveryDistanceMeters: 10000,
            amountItems: 2,
            time: 'Fri, 15 Oct 2021 18:33:01 GMT'
        },
        expectedResult: 15
    },
]

export const DELIVERY_FEE_0_15_EUROS_DATA: { input: CalculatorInput, expectedResult: number }[] = [
    {
        input: {
            cartValueEuros: 2.35,
            deliveryDistanceMeters: 500,
            amountItems: 3,
            time: 'Fri, 15 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 9.65
    },
    {
        input: {
            cartValueEuros: 9,
            deliveryDistanceMeters: 500,
            amountItems: 1,
            time: 'Fri, 15 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 3
    },
    {
        input: {
            cartValueEuros: 5.6,
            deliveryDistanceMeters: 1510,
            amountItems: 5,
            time: 'Fri, 15 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 8.9
    },
    {
        input: {
            cartValueEuros: 10,
            deliveryDistanceMeters: 2000,
            amountItems: 5,
            time: 'Fri, 15 Oct 2021 17:20:01 GMT'
        },
        expectedResult: 4.95
    },
    {
        input: {
            cartValueEuros: 8.73,
            deliveryDistanceMeters: 1030,
            amountItems: 5,
            time: 'Fri, 15 Oct 2021 17:20:01 GMT'
        },
        expectedResult: 5.247
    },
    {
        input: {
            cartValueEuros: 8.73,
            deliveryDistanceMeters: 1030,
            amountItems: 5,
            time: 'Fri, 15 Oct 2021 12:20:01 GMT'
        },
        expectedResult: 4.77
    },

]






