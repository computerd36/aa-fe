import { CircleAlert, CircleCheck, CircleHelp, CircleX, LoaderCircle } from "lucide-react";
import { StatusType } from "../resources";


interface StatusIconComponentProps {
    status: StatusType;
    className?: string;
}

export const StatusIconComponent = ({ status, className }: StatusIconComponentProps) => {
    let iconColor: string;

    switch (status) {
        case 'loading':
            iconColor = 'text-gray-500';
            return <LoaderCircle className={`${iconColor} ${className} animate-spin`} />;
        case 'ok':
            iconColor = 'text-green-500';
            return <CircleCheck className={`${iconColor} ${className}`} />;
        case 'warning':
            iconColor = 'text-yellow-500';
            return <CircleAlert className={`${iconColor} ${className}`} />;
        case 'error':
            iconColor = 'text-red-500';
            return <CircleX className={`${iconColor} ${className}`} />;
        default:
            iconColor = 'text-gray-500';
            return <CircleHelp className={`${iconColor} ${className}`} />;
    }
};