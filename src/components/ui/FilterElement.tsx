import { FC } from "react";

interface FilterElementProps {
  label: string;
}

const FilterElement: FC<FilterElementProps> = ({ label }) => {
  return (
    <div className="px-4 py-2 h-auto rounded-full bg-light-85 dark:bg-dark-20">
      {label}
    </div>
  );
};

export default FilterElement;
