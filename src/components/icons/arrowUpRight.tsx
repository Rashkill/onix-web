import { SVGProps } from "react";

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-arrow-up-right"
    {...props}
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);
export default ArrowUpRight;
