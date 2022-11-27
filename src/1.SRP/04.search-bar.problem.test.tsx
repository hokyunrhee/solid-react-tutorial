import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchBar } from "./04.search-bar.problem";

const setup = () => {
  const onFilterTextChange = jest.fn();
  const onInStockOnlyChange = jest.fn();

  const TestEnvironment = () => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    onFilterTextChange.mockImplementationOnce((value) => setFilterText(value));
    onInStockOnlyChange.mockImplementationOnce((value) => setInStockOnly(value));

    return (
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
    );
  };

  render(<TestEnvironment />);

  return { onFilterTextChange, onInStockOnlyChange };
};

describe("SearchBar", () => {
  it("should display editable text input", () => {
    const { onFilterTextChange } = setup();
    const textBox = screen.getByRole("textbox");

    userEvent.type(textBox, "apple");

    expect(textBox).toHaveValue("apple");
    expect(onFilterTextChange).toHaveBeenLastCalledWith("apple");
  });

  it("should display checkable checkbox", () => {
    const { onInStockOnlyChange } = setup();
    const checkbox = screen.getByRole("checkbox");

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(onInStockOnlyChange).toHaveBeenCalledWith(true);

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(onInStockOnlyChange).toHaveBeenCalledWith(false);
  });
});
