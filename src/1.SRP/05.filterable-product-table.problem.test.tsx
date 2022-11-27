import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FilterableProductTable } from "./05.filterable-product-table.problem";

describe("FilterableProductTable", () => {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  it('should display list of products that match filter text "p"', () => {
    render(<FilterableProductTable products={products} />);

    userEvent.type(screen.getByRole("textbox"), "p");

    const tableBody = screen.getByTestId("table-body");
    expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(2);
    expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(5);
  });

  it("should display list of products in stock when inStock option is passed", () => {
    render(<FilterableProductTable products={products} />);

    userEvent.click(screen.getByRole("checkbox"));

    const tableBody = screen.getByTestId("table-body");
    expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(2);
    expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(4);
  });
});
