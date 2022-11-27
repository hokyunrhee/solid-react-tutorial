interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const { children, icon, ...restProps } = props;

  return (
    <button {...restProps} style={{ display: "inline-flex", alignItems: "center", fontSize: "16px" }}>
      {icon && <span style={{ display: "inline-flex", marginRight: "8px" }}>{icon}</span>}
      {children}
    </button>
  );
};
