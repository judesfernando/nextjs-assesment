import React from "react";

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "currentColor", className = "" }) => {
    return (
        <svg
            className={`inline-block ${className}`}
            width={size}
            height={size}
            fill={color}
            aria-hidden="true"
        >
            <use href={`/icons.svg?v=w#${name}`} />
        </svg>
    );
};

export default Icon;
