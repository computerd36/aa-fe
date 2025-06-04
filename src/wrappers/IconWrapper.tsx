
interface IconWrapperProps {
    children: React.ReactNode;
    size?: number;
}

export const IconWrapper = ({ children, size }: IconWrapperProps) => (
    <div className={`${size ? `w-${size} h-${size}` : "w-6 h-6"} flex items-center justify-center`}>
        {children}
    </div>
);