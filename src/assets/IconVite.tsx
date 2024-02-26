import * as React from "react"

function IconVite(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="2.5em"
            height="2.5em"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}>
            <path
                d="M29.884 6.146l-13.142 23.5a.714.714 0 01-1.244.005L2.096 6.148a.714.714 0 01.746-1.057l13.156 2.352a.714.714 0 00.253 0l12.881-2.348a.714.714 0 01.752 1.05z"
                fill="url(#paint0_linear)"
            />
            <path
                d="M22.264 2.007L12.54 3.912a.357.357 0 00-.288.33l-.598 10.104a.357.357 0 00.437.369l2.707-.625a.357.357 0 01.43.42l-.804 3.939a.357.357 0 00.454.413l1.672-.508a.357.357 0 01.454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222 7.925-15.815a.357.357 0 00-.387-.51l-2.787.537a.357.357 0 01-.41-.45l1.818-6.306a.357.357 0 00-.412-.45z"
                fill="url(#paint1_linear)"
            />
            <defs id="defs50">
                <linearGradient
                    id="paint0_linear"
                    x1={6.0002}
                    y1={32.9999}
                    x2={235}
                    y2={344}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1.34 1.894) scale(.07142)"
                >
                    <stop stopColor="#41D1FF" id="stop38"/>
                    <stop offset={1} stopColor="#BD34FE" id="stop40"/>
                </linearGradient>
                <linearGradient
                    id="paint1_linear"
                    x1={194.651}
                    y1={8.8182}
                    x2={236.076}
                    y2={292.989}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1.34 1.894) scale(.07142)"
                >
                    <stop stopColor="#FFEA83" id="stop43"/>
                    <stop offset={0.0833} stopColor="#FFDD35" id="stop45"/>
                    <stop offset={1} stopColor="#FFA800" id="stop47"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default IconVite
