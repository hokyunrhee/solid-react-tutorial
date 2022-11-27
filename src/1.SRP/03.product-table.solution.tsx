import { ProductRow } from "./01.product-row.solution";
import { ProductCategoryRow } from "./02.product-category-row.solution";

type Product = { category: string; price: string; stocked: boolean; name: string };

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export const ProductTable = (props: ProductTableProps) => {
  const { products, filterText, inStockOnly } = props;

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
      rows.push(<ProductCategoryRow key={category} category={category} />);
    }

    rows.push(<ProductRow key={name} name={name} price={price} stocked={stocked} />);

    lastCategory = category;
  });

  return (
    <table>
      <thead data-testid="table-head">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">{rows}</tbody>
    </table>
  );
};
