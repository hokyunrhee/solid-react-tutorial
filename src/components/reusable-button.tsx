import { PlayIcon, PauseIcon, StopIcon, ForwardIcon } from "./icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role: "play" | "pause" | "stop" | "forward";
}

export const Button = (props: ButtonProps) => {
  const { children, role, ...restProps } = props;

  const icons = {
    play: <PlayIcon />,
    pause: <PauseIcon />,
    stop: <StopIcon />,
    forward: <ForwardIcon />,
  };

  return (
    <button {...restProps} style={{ display: "inline-flex", alignItems: "center", fontSize: "16px" }}>
      {role && <span style={{ display: "inline-flex", marginRight: "8px" }}>{icons[role]}</span>}
      {children}
    </button>
  );
};
