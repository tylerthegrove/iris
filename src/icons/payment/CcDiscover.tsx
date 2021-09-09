import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CcDiscover = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <defs>
        <mask
          id="cc-discover_svg__a"
          x={2}
          y={8}
          width={16.81}
          height={2.93}
          maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M2 10.93h16.81V8H2v2.93z" />
        </mask>
      </defs>
      <path
        d="M1.5 3h17A1.5 1.5 0 0 1 20 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 0 15.5v-11A1.5 1.5 0 0 1 1.5 3z"
        fill="#f0f0f0"
      />
      <path
        d="M18.5 17a1.5 1.5 0 0 0 1.5-1.5v-5.35c-2.2 2.08-6.2 4.71-17.24 6.85z"
        fill="#ee7623"
      />
      <path
        d="M3.39 10.11a1 1 0 0 1-.71.22h-.14V8.54h.14a.9.9 0 0 1 1 .9.91.91 0 0 1-.3.67m-.62-2H2v2.68h.76a1.37 1.37 0 0 0 1-.31 1.34 1.34 0 0 0-.81-2.38h-.18"
        fill="#231f20"
      />
      <g mask="url(#cc-discover_svg__a)">
        <path fill="#231f20" d="M4.45 10.77h.52V8.08h-.52v2.69z" />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          d="M6.26 9.11c-.32-.11-.41-.19-.41-.34a.36.36 0 0 1 .39-.3.57.57 0 0 1 .42.22l.28-.36A1.21 1.21 0 0 0 6.15 8a.8.8 0 0 0-.84.75c0 .37.17.56.66.74a2.28 2.28 0 0 1 .36.15.33.33 0 0 1 .16.28.39.39 0 0 1-.39.38.63.63 0 0 1-.59-.3l-.34.34a1 1 0 0 0 .94.5A.86.86 0 0 0 7 10c0-.43-.18-.62-.77-.84"
          fill="#231f20"
        />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          d="M7.2 9.43a1.4 1.4 0 0 0 1.38 1.41 1.49 1.49 0 0 0 .65-.16v-.62a.83.83 0 0 1-.63.29.87.87 0 0 1-.9-.85v-.07a.89.89 0 0 1 .86-.92.85.85 0 0 1 .65.3v-.62A1.3 1.3 0 0 0 8.63 8 1.41 1.41 0 0 0 7.2 9.41z"
          fill="#231f20"
        />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          fill="#231f20"
          d="M13.43 9.89l-.72-1.81h-.57l1.14 2.76h.28l1.16-2.76h-.57l-.72 1.81z"
        />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          fill="#231f20"
          d="M14.96 10.77h1.48v-.46h-.96v-.72h.92v-.46h-.92v-.59h.96v-.46h-1.48v2.69z"
        />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          d="M17.46 9.32h-.16v-.81h.17c.34 0 .5.13.5.39s-.17.42-.51.42m1.05-.45c0-.5-.34-.79-1-.79h-.77v2.69h.51V9.69h.07l.73 1.08h.64l-.79-1.13a.72.72 0 0 0 .61-.77"
          fill="#231f20"
        />
      </g>
      <g mask="url(#cc-discover_svg__a)">
        <path
          d="M10.86 8a1.43 1.43 0 1 1-1.42 1.43A1.43 1.43 0 0 1 10.86 8"
          fill="#ee7623"
        />
      </g>
    </svg>
  )
);
