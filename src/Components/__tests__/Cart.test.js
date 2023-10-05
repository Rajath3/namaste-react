import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from '../mocks/kulfiMenu.json'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Heading from "../Header"
import Cart from '../Cart'
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('Should add items to cart', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu/>
                <Heading />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const menuAccordion = screen.getByText('Recommended (14)')

    expect(menuAccordion).toBeInTheDocument()

    const cardItems = screen.getAllByTestId('cartItem')

    expect(cardItems.length).toBe(14)

    const addBtns = screen.getAllByText('Add +')

    expect(addBtns.length).toBe(14)

    const cartItemsBefore = screen.getByText('Cart - 0 items')

    expect(cartItemsBefore).toBeInTheDocument()

    fireEvent.click(addBtns[0])

    const cartItemsAfter = screen.getByText('Cart - 1 items')

    expect(cartItemsAfter).toBeInTheDocument()

    const cardItemsAfter = screen.getAllByTestId('cartItem')

    expect(cardItemsAfter.length).toBe(15)

    const clearCart = screen.getByText('Clear Cart')

    expect(clearCart).toBeInTheDocument()

    fireEvent.click(clearCart)

    const cardItemsAfterClearCart = screen.getAllByTestId('cartItem')

    expect(cardItemsAfterClearCart.length).toBe(14)

})