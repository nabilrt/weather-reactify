import clsx from "clsx";
const SearchButton = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-full font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "text-white bg-[#444444] hover:bg-gray-700": variant === "primary",
          "text-white bg-emerald-400 hover:bg-emerald-600":
            variant === "secondary",
          "text-white bg-red-600 hover:bg-red-800": variant === "danger",
          "text-white bg-yellow-500 hover:bg-yellow-700": variant === "warning",
          "text-white bg-blue-500 hover:bg-blue-700": variant === "success",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default SearchButton;
