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
        "white-[#fc8eac] w-full rounded-full border border-[#00d8ff] bg-[#444444] px-6 py-4 text-sm font-semibold text-white active:border-[#00d8ff]",
        className,
      )}
    >
      {children}
    </input>
  );
};

const SearchedComponent = forwardRef(SearchInput);

export default SearchedComponent;
