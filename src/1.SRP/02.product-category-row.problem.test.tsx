import { render, screen } from "@testing-library/react";

import { ProductCategoryRow } from "./02.product-category-row.problem";

describe("ProductCategoryRow", () => {
  it("should display the category of the products", () => {
    const category = "Vegetables";

    render(
      <table>
        <tbody>
          <ProductCategoryRow category={category} />
        </tbody>
      </table>
    );

    expect(screen.getByText("Vegetables")).toBeInTheDocument();
  });
});
