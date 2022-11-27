interface ProductCategoryRowProps {
  category: string;
}

export const ProductCategoryRow = (props: ProductCategoryRowProps) => {
  const { category } = props;

  return (
    <tr data-testid="product-category-row">
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
