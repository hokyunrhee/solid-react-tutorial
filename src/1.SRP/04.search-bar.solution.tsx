interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (value: boolean) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } = props;

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} /> Only
        show products in stock
      </label>
    </form>
  );
};
