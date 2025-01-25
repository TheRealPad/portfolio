import { Props } from "./types";

function ArrowDownIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 5V19M12 19L6 13M12 19L18 13"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export { ArrowDownIcon };
