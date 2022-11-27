import { render, screen } from "@testing-library/react";

import { ProductRow } from "./01.product-row.problem";

describe("ProductRow", () => {
  it("should display the product name and price", () => {
    const product = { category: "Fruits", price: "$1", stocked: true, name: "Apple" };
    const { name, price, stocked } = product;

    render(
      <table>
        <tbody>
          <ProductRow name={name} price={price} stocked={stocked} />
        </tbody>
      </table>
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("$1")).toBeInTheDocument();
  });

  it("should display the product name in red", () => {
    const product = { category: "Fruits", price: "$1", stocked: false, name: "Apple" };
    const { name, price, stocked } = product;

    render(
      <table>
        <tbody>
          <ProductRow name={name} price={price} stocked={stocked} />
        </tbody>
      </table>
    );

    expect(screen.getByText("Apple")).toHaveStyle("color: red");
  });
});
