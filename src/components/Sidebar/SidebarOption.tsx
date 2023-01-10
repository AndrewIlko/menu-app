import { ReactNode } from "react";

interface SidebarOption {
  url: string;
  title: string;
  children: ReactNode;
}

const SidebarOption = ({
  url,
  title,
  children,
}: SidebarOption): JSX.Element => {
  return (
    <>
      <a
        className="py-4 px-3 flex items-center border-b hover:border-b-red-500 transition-colors duration-300 cursor-pointer ease-in-out"
        href={url}
      >
        {children}
        <span className="ml-3 mr-2.5 select-none">{title}</span>
        <svg
          className="ml-auto"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3C3.90694 3 3 3.90694 3 5V19C3 20.0931 3.90694 21 5 21H19C20.0931 21 21 20.0931 21 19V12H19V19H5V5H12V3H5ZM14 3V5H17.5859L8.29297 14.293L9.70703 15.707L19 6.41406V10H21V3H14Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default SidebarOption;
