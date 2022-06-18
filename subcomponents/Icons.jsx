import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const MenuIcon = props => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 7H19M1 1H19M1 13H19" className={props.pathclassname || ""} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

export const UserIcon = props => (
  <svg width="18" height="24" viewBox="0 0 18 22" fill={props.color || "none"} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 5C11.5 3.62125 10.3787 2.5 9 2.5C7.62125 2.5 6.5 3.62125 6.5 5C6.5 6.37875 7.62125 7.5 9 7.5C10.3787 7.5 11.5 6.37875 11.5 5ZM14 5C14 7.7575 11.7575 10 9 10C6.2425 10 4 7.7575 4 5C4 2.2425 6.2425 0 9 0C11.7575 0 14 2.2425 14 5ZM0.25 20C0.25 15.175 4.17625 11.25 9 11.25C13.8237 11.25 17.75 15.175 17.75 20C17.75 20.69 17.1912 21.25 16.5 21.25C15.8088 21.25 15.25 20.69 15.25 20C15.25 16.5537 12.4462 13.75 9 13.75C5.55375 13.75 2.75 16.5537 2.75 20C2.75 20.69 2.19125 21.25 1.5 21.25C0.80875 21.25 0.25 20.69 0.25 20Z" fill={props.color || "#fff"}></path>
  </svg>
);

export const ChartIcon = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3.25" y="15" width="2.5" height="7" rx="1.25" fill={props.color || "#fff"}></rect>
    <rect x="8.25" y="3" width="2.5" height="19" rx="1.25" fill={props.color || "#fff"}></rect>
    <rect x="13.25" y="11" width="2.5" height="11" rx="1.25" fill={props.color || "#fff"}></rect>
    <rect x="18.25" y="7" width="2.5" height="15" rx="1.25" fill={props.color || "#fff"}></rect>
  </svg>
);

export const CustomArrowIcon = ({ isRightArrow, className }) => (
  <span className={`text-[20px] w-7 h-7 flex items-center justify-center text-red bg-white rounded-full border-2 border-black ${isRightArrow ? "right-0" : "left-0"} ${className}`}>
    {isRightArrow ? <BiChevronRight className="!fill-red !translate-x-0" /> : <BiChevronLeft className="!fill-red !translate-x-0" />}
  </span>
);

export const ShareIcon = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#F91155"
      d="M14.8 6.4l-5-5.1c-.2-.2-.4-.3-.7-.3-.2 0-.5.1-.7.3l-.1.1c-.3.4-.2 1 .1 1.3L11.6 6H9.1C4.6 6 1 9.6 1 14.1c0 .5.4.9.9.9s.9-.4.9-.9v-.2c.1-3.4 2.8-6 6.2-6h2.6l-3.2 3.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5.1c.3-.3.3-.8 0-1.1z"
    />
  </svg>
);

export const DeliveryTruck = props => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#fff" stroke="#fff" strokeWidth={0.1}>
      <path d="M15.105 11.84a2.574 2.574 0 0 0-2.571 2.572 2.574 2.574 0 0 0 2.571 2.57 2.574 2.574 0 0 0 2.571-2.57 2.574 2.574 0 0 0-2.571-2.571Zm0 3.782c-.668 0-1.21-.543-1.21-1.21 0-.668.543-1.21 1.21-1.21.668 0 1.21.542 1.21 1.21 0 .667-.543 1.21-1.21 1.21ZM6.492 11.84a2.574 2.574 0 0 0-2.571 2.572 2.574 2.574 0 0 0 2.57 2.57 2.574 2.574 0 0 0 2.572-2.57 2.574 2.574 0 0 0-2.571-2.571Zm0 3.782c-.668 0-1.21-.543-1.21-1.21 0-.668.542-1.21 1.21-1.21.667 0 1.21.542 1.21 1.21 0 .667-.543 1.21-1.21 1.21ZM16.847 4.652a.68.68 0 0 0-.608-.374H12.87v1.36H15.82l1.702 3.386.023.045.044-.023 1.127-.566.045-.023-.023-.044-1.89-3.76Z" />
      <path d="M13.264 13.803v-.05H8.396v1.36H13.264v-1.31ZM4.6 13.752H2.417a.68.68 0 1 0 0 1.361H4.6a.68.68 0 1 0 0-1.36ZM18.667 8.322a.68.68 0 0 0-.537-.263H13.6V3.697a.68.68 0 0 0-.68-.68H2.416a.68.68 0 1 0 0 1.36h9.824V8.74c0 .376.304.68.68.68h4.877l.892 1.15v3.183h-1.693a.68.68 0 1 0 0 1.36h2.374a.68.68 0 0 0 .68-.68v-4.096a.681.681 0 0 0-.143-.417l-1.24-1.597Zm0 0-.04.03m.04-.03-.04.03m0 0a.63.63 0 0 0-.497-.243H13.6l5.028.244ZM13.55 8.06V3.697a.63.63 0 0 0-.63-.63H2.416a.63.63 0 1 0 0 1.26h9.824l1.31 3.732ZM4.559 10.56h-2.9a.68.68 0 1 0 0 1.36h2.9a.68.68 0 1 0 0-1.36ZM6.008 8.08H.63a.68.68 0 1 0 0 1.36h5.378a.68.68 0 1 0 0-1.36Z" />
      <path d="M7.038 5.601H1.66a.68.68 0 1 0 0 1.36h5.378a.68.68 0 1 0 0-1.36Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Facebook = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={30}
    height={30}
    {...props}
  >
    <linearGradient
      id="a"
      x1={9.993}
      x2={40.615}
      y1={9.993}
      y2={40.615}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4949f2" />
      <stop offset={1} stopColor="#0505ef" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
    />
    <path
      fill="#fff"
      d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
    />
  </svg>
);

export const Instagram = props => (
  <svg
    height={30}
    viewBox="0 0 512 512"
    width={30}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0" />
    <path d="M370.594 169.305a45.546 45.546 0 0 0-10.996-16.903 45.514 45.514 0 0 0-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 0 0-16.903 10.996 45.572 45.572 0 0 0-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0 0 10.996 16.903 45.514 45.514 0 0 0 16.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0 0 27.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0" />
    <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 0 1-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 0 1-26.038-16.957 72.044 72.044 0 0 1-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0 1 16.96-26.035 72.003 72.003 0 0 1 26.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0 1 26.04 16.96 72.027 72.027 0 0 1 16.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0" />
  </svg>
);

export const Telegram = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={30}
    height={30}
    {...props}
  >
    <path fill="#000" d="M24 4a20 20 0 1 0 0 40 20 20 0 1 0 0-40Z" />
    <path
      fill="#fff"
      d="m33.95 15-3.746 19.126s-.161.874-1.245.874c-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355S10 24.375 10 23.625c0-.625.933-.923.933-.923l21.316-8.468c-.001-.001.651-.235 1.126-.234.292 0 .625.125.625.5 0 .25-.05.5-.05.5z"
    />
    <path
      fill="#b0bec5"
      d="m23 30.505-3.426 3.374s-.149.115-.348.12a.494.494 0 0 1-.219-.043l.964-5.965L23 30.505z"
    />
    <path
      fill="#cfd8dc"
      d="M29.897 18.196a.5.5 0 0 0-.701-.093L16 26s2.106 5.892 2.427 6.912c.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096a.499.499 0 0 0 .094-.7z"
    />
  </svg>
);
