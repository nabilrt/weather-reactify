import clsx from "clsx";
import { forwardRef } from "react";
const SearchInput = ({ children, className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      placeholder="Type any city name..."
      className={clsx(
        "px-6 py-4 font-semibold text-sm border border-[#00d8ff] bg-[#444444] rounded-full w-full white-[#fc8eac] active:border-[#00d8ff] text-white",
        className
      )}
    >
      {children}
    </input>
  );
};

const SearchedComponent = forwardRef(SearchInput);

export default SearchedComponent;
