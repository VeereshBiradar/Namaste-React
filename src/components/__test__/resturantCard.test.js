import { render } from "@testing-library/react"
import { RestaurantCard } from "../RestaurantCard"

//Unit Test Cases
it('should render resturant card with it data', ()=> {
    render(<RestaurantCard resData={'hi'}/>) //pass mock data

    const name = screen.getByText('Bangalore Hotel Resturant');
    expect(name).toBeInTheDocument();
})