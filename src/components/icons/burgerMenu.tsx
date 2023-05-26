import * as React from "react";
import { SVGProps } from "react";
const BurgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-menu"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);
export default BurgerMenuIcon;
