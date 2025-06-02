import { Input } from "@heroui/react"

interface SetupStep2Props {
    name: string
    setName: (name: string) => void
}

export const SetupStep2 = ({ name, setName }: SetupStep2Props) => {

    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-2">How should we call you?</h2>
            <div className="flex items-center gap-4">
                <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    variant="faded"
                    onChange={(e) => setName(e.target.value)}
                    className="max-w-[300px] w-full mx-auto"
                    required
                />
            </div>
        </div>
    )
}