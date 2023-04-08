import { SVGProps } from "react";
const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={19} viewBox="0 0 22 19" fill="none" {...props}>
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 1.928h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2Z"
    />
    <path fill="#BC98F2" d="m21 2.928-10 8-10-8" />
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 2.928-10 8-10-8"
    />
  </svg>
);
export default Email;
