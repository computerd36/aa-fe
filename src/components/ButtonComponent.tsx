import { Button } from "@heroui/react"
import { Link } from "react-router-dom"


interface ButtonComponentProps {
    icon: React.ReactNode,
    text: string,
    onPress?: () => void,
    to?: string,
    isPrimary?: boolean,
    isLoading?: boolean,
    targetBlank?: boolean,
}

export const ButtonComponent = ({ icon, text, onPress, to, isPrimary, isLoading = false, targetBlank = false }: ButtonComponentProps) => {
    if (isLoading) {
        return (
            <Button isLoading color="primary" variant="faded" className={`flex items-center gap-2 text-md md:text-xl bg-zinc-950 text-zinc-50 px-4 py-2 ${isPrimary ? 'border-primary text-primary' : ''}`}>
                <span className="min-h-6 min-w-6 flex items-center">{icon}</span>
                <span>{text}</span>
            </Button>
        )
    }

    if (!to) {
        return (
            <Button color="primary" onPress={onPress} variant="faded" className={`flex items-center gap-2 text-md md:text-xl bg-zinc-950 text-zinc-50 px-4 py-2 ${isPrimary ? 'border-primary text-primary' : ''}`}>
                <span className="min-h-6 min-w-6 flex items-center">{icon}</span>
                <span>{text}</span>
            </Button>
        )
    }

    return (
        <Button
            as={Link} 
            to={to}
            target={targetBlank ? "_blank" : "_self"}
            color="primary" variant="faded" className={`flex items-center gap-2 text-md md:text-xl bg-zinc-950 text-zinc-50 px-4 py-2 ${isPrimary ? 'border-primary text-primary' : ''}`}>
            <span className="min-h-6 min-w-6 flex items-center">{icon}</span>
            <span>{text}</span>
        </Button>

    )
}