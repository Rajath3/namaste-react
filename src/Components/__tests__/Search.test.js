import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body'
import MOCK_DATA from '../mocks/resAllData.json'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('Should search for pizza restaurants',async () => {
    await act(async ()=> render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeSearch = screen.getAllByTestId('resCard');

    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole('button', {name: 'Search'})

    const inputForSearch = screen.getByTestId("inputForSearch")

    fireEvent.change(inputForSearch, {target: {value: 'pizza'}})

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId('resCard');

    expect(cardsAfterSearch.length).toBe(3)

    expect(searchBtn).toBeInTheDocument()
})

it('should search for top rated restaurant', async () => {
    await act(async ()=> render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId('resCard');

    expect(cardsBeforeFilter.length).toBe(20)

    const topRatedBtn = screen.getByRole('button', {name: 'Top Restaurant Filter'})

    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId('resCard')

    expect(cardsAfterFilter.length).toBe(3)

})