import { render, screen, shallow} from "@testing-library/react"
import RestaurantCard, {promotedRestaurantCard} from './../RestaurantCard'
import MOCK_DATA from './../mocks/resCardMock.json'
import "@testing-library/jest-dom"


it("should render restaurant card", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Magnolia Bakery")

    expect(name).toBeInTheDocument()
});

it("should render HOC", () => {
    const PromotedCard = promotedRestaurantCard(RestaurantCard)
    
    render(<PromotedCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Magnolia Bakery")

    expect(name).toBeInTheDocument()
})