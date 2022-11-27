import { render, screen } from "@testing-library/react";

import { Button } from "./01.button.solution";
import { VolumeIcon } from "../components/icons";

describe("Button", () => {
  it("should display button name with icon", () => {
    render(<Button icon={<VolumeIcon />}>Volume</Button>);

    expect(screen.getByRole("button", { name: /volume/i })).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
