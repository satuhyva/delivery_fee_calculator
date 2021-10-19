import { 
    calculateDeliveryFee, 
    calculateSmallValueExtra, 
    calculateDistanceDependentExtra,
    calculateAmountDependentExtra,
    calculateTimeDependentExtra

} from '../calculateDeliveryFee'
import { 
    SMALL_CART_VALUE_DATA, DISTANCE_DATA, AMOUNT_ITEMS_DATA, TIME_DATA , 
    DELIVERY_FEE_MAX_CART_LIMIT_DATA, DELIVERY_FEE_MAX_LIMIT_DATA, DELIVERY_FEE_0_15_EUROS_DATA
} from './testData'



describe('CALCULATING PARTIAL FEES', () => {

    test('Calculating extra due to small cart total value', () => {
        SMALL_CART_VALUE_DATA.forEach(data => {
            const result = calculateSmallValueExtra(data.cartValue, data.limit)
            expect(result).toBe(data.expectedResult)
        })
    })

    test('Calculating extra due to distance', () => {
        DISTANCE_DATA.forEach(data => {
            const result = calculateDistanceDependentExtra(
                data.meters, data.baseDistance, data.baseExtra, data.additionalDistance, data.additionalExtra)
            expect(result).toBe(data.expectedResult)
        })
    })

    test('Calculating extra due to amount of items', () => {
        AMOUNT_ITEMS_DATA.forEach(data => {
            const result = calculateAmountDependentExtra(
                data.amount, data.amountLimit, data.amountExtra)
            expect(result).toBe(data.expectedResult)
        })
    })

    test('Calculating extra due to rush', () => {
        TIME_DATA.forEach(data => {
            const result = calculateTimeDependentExtra(
                data.time, data.rushDay, data.rushStart, data.rushEnd, data.cumulatedFee, data.multiplier)
            expect(result).toBe(data.expectedResult)
        })
    })
})



describe('CALCULATING TOTAL FEE', () => {

    test('is done correctly regarding the maximum cart value limit', () => {
        DELIVERY_FEE_MAX_CART_LIMIT_DATA.forEach(data => {
            const result = calculateDeliveryFee(data.input)
            expect(result).toBe(data.expectedResult)
        })
    })

    test('is done correctly regarding the maximum fee limit', () => {
        DELIVERY_FEE_MAX_LIMIT_DATA.forEach(data => {
            const result = calculateDeliveryFee(data.input)
            expect(result).toBe(data.expectedResult)
        })
    })

    test('is done correctly for various input combinations expected to yield a fee between 0 and 15 euros', () => {
        DELIVERY_FEE_0_15_EUROS_DATA.forEach(data => {
            const result = calculateDeliveryFee(data.input)
            expect(result).toBe(data.expectedResult)
        })
    })

})




