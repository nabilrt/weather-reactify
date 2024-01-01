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
        "rounded-full px-4 py-2 text-sm font-semibold shadow-md disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-[#444444] text-white hover:bg-gray-700": variant === "primary",
          "bg-emerald-400 text-white hover:bg-emerald-600":
            variant === "secondary",
          "bg-red-600 text-white hover:bg-red-800": variant === "danger",
          "bg-yellow-500 text-white hover:bg-yellow-700": variant === "warning",
          "bg-blue-500 text-white hover:bg-blue-700": variant === "success",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default SearchButton;
