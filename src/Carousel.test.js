import { fireEvent, getByTestId, queryByTestId, render, screen } from '@testing-library/react';
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
    const cardText = getByText("Photo by Richard Pasquarella on Unsplash");
    const arrowRight = screen.getByTestId("right-arrow");
    expect(cardText).toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    fireEvent.click(arrowRight);
    const arrowLeft = screen.getByTestId("left-arrow");
    expect(cardText).not.toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    expect(cardText).toHaveTextContent("Photo by Pratik Patel on Unsplash");
    fireEvent.click(arrowLeft);
    expect(cardText).toHaveTextContent("Photo by Richard Pasquarella on Unsplash");
    expect(cardText).not.toHaveTextContent("Photo by Pratik Patel on Unsplash");
})


it("should hide left arrow when on first image", () => {
    const { queryByTestId } = render(<Carousel />);
    const arrowLeft = queryByTestId("left-arrow");
    expect(arrowLeft).toBeNull();
})