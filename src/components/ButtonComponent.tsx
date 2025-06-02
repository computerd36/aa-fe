import { Button } from "@heroui/react"
import { Link } from "react-router-dom"


interface ButtonComponentProps {
    icon: React.ReactNode,
    text: string,
    onPress?: () => void,
    to?: string,
    isPrimary?: boolean,
    isLoading?: boolean
}

export const ButtonComponent = ({ icon, text, onPress, to, isPrimary, isLoading = false }: ButtonComponentProps) => {
    if (isLoading) {
        return (
            <Button isLoading color="primary" variant="faded" className={`flex items-center gap-2 text-xs sm:text-md md:text-xl bg-zinc-950 text-zinc-50 px-4 py-2 ${isPrimary ? 'border-primary text-primary' : ''}`}>
                {icon} {text}
            </Button>
        )
    }
    
    return (
        <Button as={Link} color="primary" to={to} onPress={onPress} variant="faded" className={`flex items-center gap-2 text-xs sm:text-md md:text-xl bg-zinc-950 text-zinc-50 px-4 py-2 ${isPrimary ? 'border-primary text-primary' : ''}`}>
            {icon} {text}
        </Button>
    )
}