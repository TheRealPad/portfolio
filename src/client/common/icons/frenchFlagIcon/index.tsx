import { Props } from "./types";

function FrenchFlagIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 512 512"
      className={className}
    >
      <g fill-rule="nonzero">
        <path
          fill="#fff"
          d="M256 19.48c65.29 0 124.45 26.48 167.24 69.27l1.1 1.18c42.14 42.71 68.17 101.37 68.17 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.73 42.16-101.4 68.19-166.04 68.19-65.23 0-124.38-26.51-167.19-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.54 45.96 190.69 19.48 256 19.48z"
        />
        <path
          fill="#E1000F"
          d="M337.87 55.63C416.8 87.92 472.4 165.46 472.4 255.99c0 90.54-55.6 168.09-134.53 200.38V55.63z"
        />
        <path
          fill="#273375"
          d="M174.14 456.37V55.63C95.21 87.91 39.59 165.44 39.59 255.99c0 90.56 55.62 168.11 134.55 200.38z"
        />
      </g>
    </svg>
  );
}

export { FrenchFlagIcon };
