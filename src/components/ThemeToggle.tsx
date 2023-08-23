"use client";
import { useTheme } from "next-themes";
import { FC } from "react";
import { DropdownMenu } from "@/ui/DropdwonMenu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Button from "@/ui/Button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-col gap-8">
          {theme === "dark" ? (
            <Sun size={60} onClick={() => setTheme("light")} />
          ) : theme === "light" ? (
            <Moon size={60} onClick={() => setTheme("dark")} />
          ) : null}
          {/* <span className="sr-only">Toggle theme</span> */}
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeToggle;
