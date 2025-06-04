import { Input } from "@heroui/react"
import { useEffect } from "react"
import { Step } from "./SetupComponent"
import { useTranslation } from "react-i18next"

interface SetupStep2Props {
    name: string
    setName: (name: string) => void
    setStep: (step: Step) => void
}

export const SetupStep2 = ({ name, setName, setStep }: SetupStep2Props) => {
    const { t } = useTranslation();

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            const trimmedName = name.trim();

            if (e.key === 'Enter' && trimmedName.length > 2 && trimmedName.length <= 20) {
                setStep(3);
            }
        }
        window.addEventListener('keydown', listener);
        return () => {
            window.removeEventListener('keydown', listener);
        }
    }, [name, setStep]);

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-6">{t('components.setup.step2.howShouldWeCallYou')}</h2>
            <div className="flex items-center gap-4">
                <Input
                    type="text"
                    placeholder={t('components.setup.step2.yourName')}
                    size="lg"
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