import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const Github = ({ size = 24, className, style, width, height, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    width={width || size}
    height={height || size}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ size = 24, className, style, width, height, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    width={width || size}
    height={height || size}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCode = ({ size = 24, className, style, width, height, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    width={width || size}
    height={height || size}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.1a1.375 1.375 0 0 0 1.944 1.944l5.352-5.352a.375.375 0 0 1 .53 0l3.87 3.87a.375.375 0 0 1 0 .53L9.61 16.347a.375.375 0 0 1-.53 0L5.21 12.478a.375.375 0 0 1 0-.53l1.838-1.838a1.375 1.375 0 1 0-1.944-1.944L3.266 10a2.375 2.375 0 0 0 0 3.359l3.87 3.87a2.375 2.375 0 0 0 3.359 0l9.256-9.255a2.375 2.375 0 0 0 0-3.359L15.88.438A1.374 1.374 0 0 0 13.483 0z" />
    <path d="M4.5 15.75a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15z" />
  </svg>
);
