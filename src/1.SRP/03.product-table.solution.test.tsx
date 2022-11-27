import { render, screen, within } from "@testing-library/react";

import { ProductTable } from "./03.product-table.solution";

describe("ProductTable", () => {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  describe("given product list with no filter options", () => {
    it("should display product table", () => {
      const filterText = "";
      const inStockOnly = false;

      render(<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />);

      const tableHead = screen.getByTestId("table-head");
      expect(tableHead).toHaveTextContent("Name");
      expect(tableHead).toHaveTextContent("Price");
      const tableBody = screen.getByTestId("table-body");
      expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(2);
      expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(6);
    });
  });

  describe("given product list with filter text", () => {
    it('should display product table that match filter text "fruit"', () => {
      const filterText = "fruit";
      const inStockOnly = false;

      render(<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />);

      const tableHead = screen.getByTestId("table-head");
      expect(tableHead).toHaveTextContent("Name");
      expect(tableHead).toHaveTextContent("Price");
      const tableBody = screen.getByTestId("table-body");
      expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(1);
      expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(2);
    });

    it('should display product table that match filter text "a"', () => {
      const filterText = "a";
      const inStockOnly = false;

      render(<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />);

      const tableHead = screen.getByTestId("table-head");
      expect(tableHead).toHaveTextContent("Name");
      expect(tableHead).toHaveTextContent("Price");
      const tableBody = screen.getByTestId("table-body");
      expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(2);
      expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(5);
    });
  });

  describe("given product list with filter options", () => {
    it('should display the lists of products in stock that match filter text "fruit"', () => {
      const filterText = "fruit";
      const inStockOnly = true;

      render(<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />);

      const tableHead = screen.getByTestId("table-head");
      expect(tableHead).toHaveTextContent("Name");
      expect(tableHead).toHaveTextContent("Price");
      const tableBody = screen.getByTestId("table-body");
      expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(1);
      expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(1);
    });

    it('should display product table that match filter text "a"', () => {
      const filterText = "a";
      const inStockOnly = true;

      render(<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />);

      const tableHead = screen.getByTestId("table-head");
      expect(tableHead).toHaveTextContent("Name");
      expect(tableHead).toHaveTextContent("Price");
      const tableBody = screen.getByTestId("table-body");
      expect(within(tableBody).getAllByTestId("product-category-row")).toHaveLength(2);
      expect(within(tableBody).getAllByTestId("product-row")).toHaveLength(4);
    });
  });
});
