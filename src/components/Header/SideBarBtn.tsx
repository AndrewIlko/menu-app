const SideBarBtn = (): JSX.Element => {
  return (
    <>
      <button className="min-w-[48px] border shadow-sm rounded-lg flex items-center justify-center hover:border-[#B3202C] transition">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="6"
            width="16"
            height="2"
            fill="var(--theme-colors-900)"
          ></rect>
          <rect
            x="4"
            y="11"
            width="16"
            height="2"
            fill="var(--theme-colors-900)"
          ></rect>
          <rect
            x="4"
            y="16"
            width="16"
            height="2"
            fill="var(--theme-colors-900)"
          ></rect>
        </svg>
      </button>
    </>
  );
};

export default SideBarBtn;
