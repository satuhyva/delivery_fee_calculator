import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'



describe('DELIVERY FEE CALCULATOR APP', () => {

    test('app can be rendered', () => {
        render(<App />)
        const appTitleElement = screen.getByText(/DELIVERY FEE CALCULATOR/i)
        expect(appTitleElement).toBeInTheDocument()
    })

    describe('Cart value input', () => {

        test('app contains input for cart value', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Cart value"]')
            expect(component).not.toBeNull()
        })
    
        test('user can set number values to the cart value input field', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Cart value"]')
            fireEvent.change(component as Element, {
                target: { value: 22 }
            })
            expect(component).toHaveValue('22')
            fireEvent.change(component as Element, {
                target: { value: 3.5 }
            })
            expect(component).toHaveValue('3.5')
            fireEvent.change(component as Element, {
                target: { value: 12.79 }
            })
            expect(component).toHaveValue('12.79')
        })

    })

    describe('Delivery distance input', () => {

        test('app contains input for delivery distance', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Delivery distance"]')
            expect(component).not.toBeNull()
        })

        test('user can set number values to the delivery distance input field', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Delivery distance"]')
            fireEvent.change(component as Element, {
                target: { value: 22 }
            })
            expect(component).toHaveValue('22')
            fireEvent.change(component as Element, {
                target: { value: 5000 }
            })
            expect(component).toHaveValue('5000')
        })
    })

    describe('Amount of items input', () => {
        test('app contains input for items amount ', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Amount of items"]')
            expect(component).not.toBeNull()
        })
        test('user can set number values to the items amount input field', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Amount of items"]')
            fireEvent.change(component as Element, {
                target: { value: 22 }
            })
            expect(component).toHaveValue('22')
            fireEvent.change(component as Element, {
                target: { value: 5000 }
            })
            expect(component).toHaveValue('5000')
        })

    })

    describe('Date and time input', () => {

        test('app contains input for date time', () => {
            const app = render(<App />)
            const component = app.container.querySelector('[id="input-Date and time"]')
            expect(component).not.toBeNull()
        })

    })

    describe('Distance fee calculation', () => {

        test('calculate-button is enabled only after setting input data', () => {
            const app = render(<App />)
            const button = app.container.querySelector('[id="button-calculate"]')
            expect(button).toBeDisabled()
            const cart = app.container.querySelector('[id="input-Cart value"]')
            fireEvent.change(cart as Element, {
                target: { value: 10 }
            })
            expect(button).toBeDisabled()
            const distance = app.container.querySelector('[id="input-Delivery distance"]')
            fireEvent.change(distance as Element, {
                target: { value: 1000 }
            })
            expect(button).toBeDisabled()
            const amount = app.container.querySelector('[id="input-Amount of items"]')
            fireEvent.change(amount as Element, {
                target: { value: 1 }
            })
            expect(button).toBeEnabled()
        })


    })

 



})


