import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = jest.fn();
  
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);
    
    expect(asFragment()).toMatchSnapshot();
  });
    
  it('displays a search button with correct text', () => {
    render(<Search setSearchResults={validProps} />);

    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByTestId('search-btn')).toHaveTextContent('Search');
  });

  it('calls the right function when clicked', async () => {
    render(<Search setSearchResults={validProps} />)

    await fireEvent.click(screen.getByRole("button"));

    expect(validProps).toHaveBeenCalled();
  })

});