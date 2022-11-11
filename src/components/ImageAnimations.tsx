import React from 'react'

export const SvgFilterHoverIn = (): JSX.Element => (
    <svg className="defs-only" style={{ visibility: 'hidden', position: 'absolute' }}>
        <filter colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%" id="hoverInFilter">
            <feColorMatrix type="matrix">
                        <animate
                attributeType="XML"
                id="fe1"
                attributeName="values"
                to="0.78125 0 0 0 0.03125 0.7421875 0 0 0 0.0625 0.51171875 0 0 0 0.375 0 0 0 1 0"
                dur="1s"
                values = "0.6875 0 0 0 0.26171875 0.73046875 0 0 0 0.01953125 0.3046875 0 0 0 0.44140625 0 0 0 1 0;-0.0078125 0 0 0 0.43359375 0.640625 0 0 0 0.28515625 0.33203125 0 0 0 0.2265625 0 0 0 1 0;0.2421875 0 0 0 0.07421875 0.60546875 0 0 0 0.359375 -0.31640625 0 0 0 0.859375 0 0 0 1 0;0.6015625 0 0 0 0.234375 0.68359375 0 0 0 0.19140625 0.34765625 0 0 0 0.58984375 0 0 0 1 0;0.78125 0 0 0 0.03125 0.7421875 0 0 0 0.0625 0.51171875 0 0 0 0.375 0 0 0 1 0"
                keyTimes= "0;0.5;0.75;0.85;1"
                begin="0s"
                fill="freeze" />
                </feColorMatrix>
        </filter>
</svg>
)

export const SvgFilterHoverOut = (): JSX.Element => (
    <svg className="defs-only" style={{ visibility: 'hidden', position: 'absolute' }}>
        <filter colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%" id="hoverOutFilter">
            <feColorMatrix type="matrix">
                        <animate
                attributeType="XML"
                id="fe1"
                attributeName="values"
                to="0.46875 0 0 0 0.234375 0.25 0 0 0 0.5859375 0.49609375 0 0 0 0.40234375 0 0 0 1 0"
                dur="00.5s"
                values = "0.78125 0 0 0 0.03125 0.7421875 0 0 0 0.0625 0.51171875 0 0 0 0.375 0 0 0 1 0;0.6015625 0 0 0 0.234375 0.68359375 0 0 0 0.19140625 0.34765625 0 0 0 0.58984375 0 0 0 1 0;-0.0078125 0 0 0 0.43359375 0.640625 0 0 0 0.28515625 0.33203125 0 0 0 0.2265625 0 0 0 1 0;1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                keyTimes= "0;0.5;0.75;1"
                begin="0s"
                fill="freeze" />
                </feColorMatrix>
        </filter>
</svg>
)

export const SvgFilterStart = (): JSX.Element => (
    <svg className="defs-only" style={{ visibility: 'hidden', position: 'absolute' }}>
        <filter colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%" id="startFilter">
            <feColorMatrix type="matrix">
                        <animate
                attributeType="XML"
                id="fe1"
                attributeName="values"
                to="0.46875 0 0 0 0.234375 0.25 0 0 0 0.5859375 0.49609375 0 0 0 0.40234375 0 0 0 1 0"
                dur="1s"
                values = "-0.0859375 0 0 0 0.8828125 0.69140625 0 0 0 0.1484375 0.578125 0 0 0 0.35546875 0 0 0 1 0;-0.0078125 0 0 0 0.43359375 0.640625 0 0 0 0.28515625 0.33203125 0 0 0 0.2265625 0 0 0 1 0;1 -0.6 0.7 0.9 0 0 1.2 0 0 0 0 0 1 0 0 0 0 0 0.4 0;1 0.2 0 0 0 0 1 0 0 0 0 0 1 0 0 -2.6 0 0 1 0;-0.0078125 0 0 0 0.43359375 0.640625 0 0 0 0.28515625 0.33203125 0 0 0 0.2265625 0 0 0 1 0"
                keyTimes= "0;0.5;0.75;0.85;1"
                begin="0s"
                fill="freeze" />
                </feColorMatrix>
        </filter>
</svg>
)
