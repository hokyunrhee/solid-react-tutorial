interface ProductRowProps {
  name: string;
  price: string;
  stocked: boolean;
}

export const ProductRow = (props: ProductRowProps) => {
  const { name, price, stocked } = props;

  return (
    <tr data-testid="product-row">
      <td>{stocked ? name : <span style={{ color: "red" }}>{name}</span>}</td>
      <td>{price}</td>
    </tr>
  );
};
