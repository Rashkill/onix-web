import { SVGProps } from "react";
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...props}>
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 1H6a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5Z"
    />
    <path
      fill="#FF9688"
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 10.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 15 10.37Z"
    />
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 5.5h.01"
    />
  </svg>
);
export default Instagram;
