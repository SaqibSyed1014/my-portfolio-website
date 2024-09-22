import React from "react";

interface ButtonProps {
    type: 'button' | 'link',
    label: string,
    showDot: boolean,
    showPulse?: boolean,
    link?: string,
    classes?: string
}
const BaseButton :React.FC<ButtonProps> = ({ type, label, showDot, showPulse, link, classes }) => {
    const ButtonComponent = type === 'link' ? 'a' : 'button';
    return (
        <ButtonComponent
            type={type}
            href={link?.length ? link : null}
            target={link?.length ? '_blank' : null}
            className={`flex items-center group relative font-medium text-sm overflow-hidden rounded-[25px] px-4 h-[45px] 
            bg-inverted-soft-black text-soft-black uppercase ${classes?.length ? classes : ''}`}
        >
            {showDot && <div className="size-2 bg-soft-black mr-2.5 rounded-full"></div>}
            {showPulse && <span className="relative flex size-3 mr-2.5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
  <span className="relative inline-flex rounded-full size-3 bg-green-600"></span>
</span>}
            <span className="flex flex-col gap-3 h-[2cap] overflow-y-clip relative">
                <span className="translate-y-[0%] group-hover:-translate-y-full transition duration-300">{label}</span>
                <span className="translate-y-full group-hover:translate-y-[0%] transition duration-300 absolute top-0 left-0">{label}</span>
            </span>
        </ButtonComponent>
    )
}

export default BaseButton;
