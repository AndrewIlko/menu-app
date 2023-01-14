const VenueInformation = (): JSX.Element => {
  return (
    <>
      <div className="w-full mt-6">
        <div className="text-[#828282] text-sm font-semibold mb-1">
          Venue information
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 hover:text-[#B3202C] transition-all duration-200">
            <div className="h-12 w-12 bg-slate-100 rounded-md flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.4301 16.4301 20 12 20C7.56988 20 4 16.4301 4 12C4 7.56988 7.56988 4 12 4ZM11 6V12.4141L15.293 16.707L16.707 15.293L13 11.5859V6H11Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1 pt-1 text-sm">
              <div className="opacity-70">Working hours:</div>
              <div className="font-semibold">10:00 - 22:30</div>
            </div>
          </li>
          <a href="">
            <li className="flex gap-3 hover:text-[#B3202C] transition-all duration-200">
              <div className="h-12 w-12 bg-slate-100 rounded-md flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C8.686 1 6 3.686 6 7C6 11.286 12 18 12 18C12 18 18 11.286 18 7C18 3.686 15.314 1 12 1ZM12 3C14.206 3 16 4.794 16 7C16 9.01 13.919 12.3604 11.998 14.8594C10.077 12.3644 8 9.016 8 7C8 4.794 9.794 3 12 3ZM12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7C10 7.53043 10.2107 8.03914 10.5858 8.41421C10.9609 8.78929 11.4696 9 12 9C12.5304 9 13.0391 8.78929 13.4142 8.41421C13.7893 8.03914 14 7.53043 14 7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5ZM7.48047 15.4355C4.23147 16.0955 2 17.442 2 19C2 21.209 6.477 23 12 23C17.523 23 22 21.209 22 19C22 17.442 19.7685 16.0965 16.5195 15.4355C16.0675 16.0965 15.6248 16.7024 15.2168 17.2324C17.9488 17.6464 19.5662 18.512 19.9492 18.998C19.4342 19.652 16.696 20.998 12.002 20.998L12 21.002L11.998 21C7.30405 21 4.56678 19.655 4.05078 19C4.43378 18.513 6.0502 17.6454 8.7832 17.2324C8.3752 16.7014 7.93247 16.0955 7.48047 15.4355Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1 pt-1 text-sm">
                <div className="opacity-70">Address:</div>
                <div className="font-semibold">
                  Uzhhorod, Zakarpattia
                  <br /> Oblast, Ukraine
                </div>
              </div>
            </li>
          </a>

          <a href="">
            <li className="flex gap-3 hover:text-[#B3202C] transition-all duration-200">
              <div className="h-12 w-12 bg-slate-100 rounded-md flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0879 2C13.9449 2 13.7993 2.01864 13.6543 2.05664L5.5957 4.2168C4.7057 4.4558 4.17897 5.36977 4.41797 6.25977L8.30273 20.7637C8.50273 21.5087 9.17611 22 9.91211 22C10.0551 22 10.2007 21.9814 10.3457 21.9434L18.4023 19.7832C19.2923 19.5452 19.82 18.6302 19.582 17.7402L15.6973 3.23633C15.4973 2.49133 14.8239 2 14.0879 2ZM13.8516 4.07422L14.3223 5.83008L6.91406 7.85547L6.43359 6.0625L13.8516 4.07422ZM20.75 5.33789L18.8184 5.85547L20.9766 13.9141L22.9082 13.3965L20.75 5.33789ZM14.8398 7.76367L16.5703 14.2227L9.16211 16.248L7.43164 9.78711L14.8398 7.76367ZM3.02344 10.0879L1.0918 10.6055L3.25 18.6621L5.18164 18.1445L3.02344 10.0879ZM17.0879 16.1562L17.5664 17.9375L10.1484 19.9258L9.67969 18.1797L17.0879 16.1562Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1 pt-1 text-sm">
                <div className="opacity-70">Phone:</div>
                <div className="font-semibold">+380660203777</div>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default VenueInformation;
