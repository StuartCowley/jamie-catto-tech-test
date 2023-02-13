import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = [
    'image 1',
    'image 2'
  ];

  const { asFragment } = render(<SearchResults results={validProps}/>);


  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only text if there are no results', () => {
    const invalidProps = [];

    render(<SearchResults results={invalidProps} />);

    expect(screen.getByText('No results.')).toBeInTheDocument();
  });

  it('renders correct amount of images if there are results', () => {
    render(<SearchResults results={validProps} />);

    expect(screen.getAllByTestId('result-item')).toHaveLength(2);
  });
});