import { useState } from "react";

import { ProductTable } from "./03.product-table.solution";
import { SearchBar } from "./04.search-bar.solution";

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

  const onFilterTextChange = (text: string) => setFilterText(text);
  const onInStockOnlyChange = (value: boolean) => setInStockOnly(value);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
};
