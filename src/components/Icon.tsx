import * as React from "react"

function SvgComponent() {
  return (
    <svg
      width={50}
      height={113}
      viewBox="0 0 109 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
        fill="url(#paint0_linear)"
        className="svg-elem-1"
      />
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
        fill="url(#paint1_linear)"
        fillOpacity={0.2}
        className="svg-elem-2"
      />
      <path
        d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z"
        fill="#3ECF8E"
        className="svg-elem-3"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={53.9738}
          y1={54.974}
          x2={94.1635}
          y2={71.8295}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset={1} stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1={36.1558}
          y1={30.578}
          x2={54.4844}
          y2={65.0806}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent
