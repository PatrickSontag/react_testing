import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Carousel from './Carousel';

it ("should render", () => {
    render(<Carousel/>);
})

it("should match snapshot", () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
})

it("should show next/previous image when right/left arrow clicked", () => {
    const { getByText } = render(<Carousel />);
    const textCard1 = getByText("Photo by Richard Pasquarella on Unsplash");
    const arrowRight = screen.getByTestId("right-arrow");
    expect(textCard1).toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    fireEvent.click(arrowRight);
    const arrowLeft = screen.getByTestId("left-arrow");
    const textCard2 = getByText("Photo by Pratik Patel on Unsplash");
    expect(textCard1).not.toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    expect(textCard1).toHaveTextContent("Photo by Pratik Patel on Unsplash");
    fireEvent.click(arrowLeft);
    expect(textCard1).toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    expect(textCard1).not.toHaveTextContent("Photo by Pratik Patel on Unsplash");
})