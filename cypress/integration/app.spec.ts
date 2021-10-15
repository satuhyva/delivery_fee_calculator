import { getFormInputConstants } from '../../src/app/getFormInputConstants'
import { format } from 'date-fns'

const testCanInsertNumericDataOnly = (selector: string): string => {
    cy.get(selector).type(3)
    cy.get(selector).should('have.value', '3')
    cy.get(selector).type(5)
    cy.get(selector).should('have.value', '35')
    cy.get(selector).type('a')
    cy.get(selector).should('have.value', '35')
    cy.get(selector).type('A')
    cy.get(selector).should('have.value', '35')
    cy.get(selector).type('-')
    cy.get(selector).should('have.value', '35')
    cy.get(selector).type('!')
    cy.get(selector).should('have.value', '35')
    return '35'
}

const testCanInsertNumbersDotOrComma = (selector: string, dotOrComma: string) => {
    const value = testCanInsertNumericDataOnly(selector) + dotOrComma
    cy.get(selector).type('.')
    cy.get(selector).should('have.value', `${value}`)
    cy.get(selector).type(5)
    cy.get(selector).should('have.value', `${value}5`)
    cy.get(selector).type(5)
    cy.get(selector).should('have.value', `${value}55`)
    cy.get(selector).type(5)
    cy.get(selector).should('have.value', `${value}55`)
}




describe('DELIVERY FEE CALCULATOR APP', function() {

    it('app page can be opened', function() {
        cy.visit('http://localhost:3000')
        cy.contains('DELIVERY FEE CALCULATOR')
    })

    it('user can fill in the form and see the calculated fee', function() {
        cy.visit('http://localhost:3000')
        cy.get('[id="input-Cart value"]').type(3)
        cy.get('[id="input-Delivery distance"]').type(1500)
        cy.get('[id="input-Amount of items"]').type(1)
        cy.get('[id="calculated-fee"]').should('not.exist')
        cy.get('[id="button-calculate"]').click()
        cy.get('[id="calculated-fee"]').should('exist')
    })

    it('user can insert only dot- or comma-separated currency values to cart value input field', function() {
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Cart value"]'
        testCanInsertNumbersDotOrComma(selector, '.')
    })

    it('user can insert only numbers to delivery distance input field', function() {
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Delivery distance"]'
        testCanInsertNumericDataOnly(selector)
    })

    it('user can insert only numbers to amount of items input field', function() {
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Amount of items"]'
        testCanInsertNumericDataOnly(selector)

    })

    it('user can insert only values below max limit to cart value input field', function() {
        const cartValueConstants = getFormInputConstants('Cart value')
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Cart value"]'
        cy.get(selector).type(cartValueConstants.maxValue + 1)
        cy.contains(cartValueConstants.errorMessage)
    })

    it('user can insert only values below max limit to delivery distance input field', function() {
        const distanceValueConstants = getFormInputConstants('Delivery distance')
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Delivery distance"]'
        cy.get(selector).type(distanceValueConstants.maxValue + 1)
        cy.contains(distanceValueConstants.errorMessage)
    })

    it('user can insert only values below max limit to amount of items input field', function() {
        const amountItemsConstants = getFormInputConstants('Amount of items')
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Amount of items"]'
        cy.get(selector).type(amountItemsConstants.maxValue + 1)
        cy.contains(amountItemsConstants.errorMessage)
    })

    it('user is warned of selecting a date time from history)', function() {
        const today = new Date()
        const earlier = new Date().setDate(today.getDate() - 1)
        const formattedEarlier = format(earlier, 'MM/dd/yyyy')
        cy.visit('http://localhost:3000')
        const selector = '[id="input-Date and time"]'
        cy.get(selector).clear()
        cy.get('[id="input-Date and time-helper-text"').should('not.exist')
        cy.get(selector).type(`${formattedEarlier} 03:15 pm`)
        cy.get('[id="input-Date and time-helper-text"').should('exist')
    })




})

