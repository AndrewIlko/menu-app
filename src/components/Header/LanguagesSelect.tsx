import useDisable from "../../custom-hooks/useDisable";

const LanguagesSelect = (): JSX.Element => {
  const [style, setStatus] = useDisable(false);
  return (
    <>
      <button
        className={`flex items-center gap-2 shadow-sm pl-4 pr-3 border rounded-lg ${style}`}
      >
        <span className="text-sm font-semibold">EN</span>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </button>
    </>
  );
};

export default LanguagesSelect;
