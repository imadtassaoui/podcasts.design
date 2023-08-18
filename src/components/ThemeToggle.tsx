"use client";
import { useTheme } from "next-themes";
import { FC } from "react";
import { DropdownMenu } from "./ui/DropdwonMenu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Button from "./ui/Button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">
          <Sun size={20} onClick={() => setTheme("light")} />
          <Moon size={20} onClick={() => setTheme("dark")} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeToggle;
