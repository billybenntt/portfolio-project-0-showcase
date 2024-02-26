import * as React from "react"

function IconJS(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="none" fillRule="evenodd">
                <path fill="#F1DC50" d="M0 0H24V24H0z"/>
                <path
                    stroke="#333"
                    strokeWidth={2}
                    d="M12 11v8c0 .876-.523 2-2 2-2.385 0-2.5-2-2.5-2m13.29-5.484c-.6-1.01-1.396-1.516-2.386-1.516C16.856 12 16 13 16 14s.5 2 2.508 2.5c1.278.318 2.492 1 2.492 2.5s-1.315 2-2.5 2c-1.514 0-2.514-.667-3-2"
                />
            </g>
        </svg>
    )
}

export default IconJS
