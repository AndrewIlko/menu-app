import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { RootState } from "../../store/store";
import { globalActions } from "../../slices/globalSlice";
import SidebarOption from "./SidebarOption";

const SideMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { active } = useSelector((state: RootState) => state.page.sidebar);
  const { setSidebar } = globalActions;

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event);
    const elememt = event.target as HTMLInputElement;

    if (elememt.dataset.name === "bg" || elememt.localName === "button")
      dispatch(setSidebar(!active));
  };

  return (
    <>
      <div
        className={`bg-[rgb(0,0,0,0.4)] fixed w-full h-full flex justify-end top-0 items-start overflow-hidden transition-all ease-in-out duration-200 z-10 ${
          !active ? "opacity-0 invisible" : "opacity-1 visible"
        }`}
        onClick={(event) => handleClick(event)}
        data-name="bg"
      >
        <button
          className={`mr-5 mt-4 w-12 h-12 flex items-center relative text-white justify-center rounded-lg shadow-sm bg-[#B3202C] hover:bg-red-600 transition-all ease-in-out duration-200 -translate-y-20 ${
            active && "-translate-y-0"
          }`}
          onClick={(event) => handleClick(event)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7712 3.28686L8 7.0581L4.22876 3.28686L3.28595 4.22967L7.05719 8.00091L3.28595 11.7721L4.22876 12.715L8 8.94372L11.7712 12.715L12.714 11.7721L8.94281 8.00091L12.714 4.22967L11.7712 3.28686Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div
          className={`w-[360px] h-full bg-white transition-all ease-in-out duration-200 py-4 flex ${
            !active && "translate-x-[100%] "
          }`}
        >
          <div className="w-full h-[200px] px-4 text-sm">
            <div className="mb-1 mt-4 px-4 font-bold text-[#4f4f4f]">
              Contacts
            </div>
            <SidebarOption
              title={"Uzhhorod, Zakarpattia Oblast, Ukraine"}
              url={""}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1C8.686 1 6 3.686 6 7C6 11.286 12 18 12 18C12 18 18 11.286 18 7C18 3.686 15.314 1 12 1ZM12 4.85742C13.184 4.85742 14.1426 5.816 14.1426 7C14.1426 8.183 13.183 9.14258 12 9.14258C10.817 9.14258 9.85742 8.184 9.85742 7C9.85742 5.816 10.816 4.85742 12 4.85742ZM4.80078 15L2 22H22L19.1992 15H16.8125C16.3275 15.731 15.8406 16.408 15.3926 17H17.8477L19.0469 20H4.95312L6.15234 17H8.60742C8.15942 16.408 7.6725 15.731 7.1875 15H4.80078Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SidebarOption>
            <a className="py-4 px-3 flex border-b hover:border-b-red-500 transition-colors duration-300 cursor-pointer ease-in-out items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 3C3.562 3 3 3.328 3 4C3 8.539 4.8408 12.8732 7.9668 16.0332C11.1268 19.1592 15.461 21 20 21C20.672 21 21 20.438 21 20V16.4902C21 15.9452 20.5684 15.5013 20.0234 15.4883C19.3934 15.4733 18.6006 15.4357 18.0996 15.3477C17.5576 15.2517 16.9043 15.0668 16.4453 14.9238C16.0853 14.8118 15.6947 14.9098 15.4277 15.1758L13.2109 17.3809C11.6789 16.5739 10.4511 15.6329 9.41211 14.5879C8.36711 13.5489 7.42614 12.3211 6.61914 10.7891L8.82422 8.57227C9.09022 8.30527 9.18817 7.91273 9.07617 7.55273C8.93417 7.09473 8.74734 6.44239 8.65234 5.90039C8.56334 5.39939 8.52772 4.60656 8.51172 3.97656C8.49872 3.43156 8.05477 3 7.50977 3H4ZM12 3V5C15.866 5 19 8.134 19 12H21C21 7.029 16.971 3 12 3ZM12 7V9C13.657 9 15 10.343 15 12H17C17 9.239 14.761 7 12 7Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="ml-3 mr-2.5">+380992310257</span>
            </a>
            <div className="mb-1 mt-4 px-4 font-bold text-[#4f4f4f]">
              We are on social networks
            </div>
            <SidebarOption title={"Facebook"} url={""}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.0145 17.0653 19.313 13.2188 19.8984V14.3848H15.5469L15.9121 12.0195H13.2188V10.7266C13.2188 9.74356 13.539 8.87109 14.459 8.87109H15.9355V6.80664C15.6755 6.77164 15.1268 6.69531 14.0898 6.69531C11.9238 6.69531 10.6543 7.83931 10.6543 10.4453V12.0195H8.42773V14.3848H10.6543V19.8789C6.87029 19.2408 4 15.9702 4 12C4 7.56988 7.56988 4 12 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SidebarOption>
            <SidebarOption title={"Instagram"} url={""}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SidebarOption>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
