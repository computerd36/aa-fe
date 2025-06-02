import { CircleAlert, CircleCheck, CircleHelp, CircleX } from "lucide-react";


interface StatusIconComponentProps {
    status: 'operational' | 'degraded' | 'down';
    className?: string;
}

export const StatusIconComponent = ({ status, className }: StatusIconComponentProps) => {
    let iconColor: string;

    switch (status) {
        case 'operational':
            iconColor = 'text-green-500';
            return <CircleCheck className={`${iconColor} ${className}`} />;
        case 'degraded':
            iconColor = 'text-yellow-500';
            return <CircleAlert className={`${iconColor} ${className}`} />;
        case 'down':
            iconColor = 'text-red-500';
            return <CircleX className={`${iconColor} ${className}`} />;
        default:
            iconColor = 'text-gray-500';
            return <CircleHelp className={`${iconColor} ${className}`} />;
    }
};