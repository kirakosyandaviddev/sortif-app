import React from "react";
interface AvatarIconProps {
    src: string;
    className?: string;
    size?: number | string;
}

export const AvatarIcon: React.FC<AvatarIconProps> = ({
    src,
    className,
    size,
}) => (
    <img src={src} alt="Avatar" width={size} height={size} className={className} />
)