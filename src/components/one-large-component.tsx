import { useState } from "react";

interface FilterableProductTableProps {
  products: Product[];
}

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export const FilterableProductTable = ({ products }: FilterableProductTableProps) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products
    .filter(({ name }) => {
      const productName = name.toLowerCase();

      return productName.includes(filterText.toLowerCase());
    })
    .filter(({ stocked }) => (inStockOnly ? stocked : true));

  const rows: JSX.Element[] = [];
  let lastCategory = "";

  filteredProducts.forEach(({ category, name, price, stocked }) => {
    if (category !== lastCategory) {
      rows.push(
        <tr key={category} data-testid="product-row">
          <th colSpan={2}>{category}</th>
        </tr>
      );
    }

    rows.push(
      <tr key={name} data-testid="product-category-row">
        <td>{stocked ? name : <span style={{ color: "red" }}>{name}</span>}</td>
        <td>{price}</td>
      </tr>
    );

    lastCategory = category;
  });

  return (
    <div>
      <form>
        <input type="text" value={filterText} placeholder="Search..." onChange={(e) => setFilterText(e.target.value)} />
        <label>
          <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} /> Only show
          products in stock
        </label>
      </form>

      <table>
        <thead data-testid="table-head">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody data-testid="table-body">{rows}</tbody>
      </table>
    </div>
  );
};
