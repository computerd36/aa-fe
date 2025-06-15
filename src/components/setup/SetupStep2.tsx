import { Input, Tooltip } from "@heroui/react"
import { Step } from "./SetupComponent"
import { useTranslation } from "react-i18next"
import { isValidInput, ValidationResult } from "../../utils/Validator"
import { useCallback, useEffect } from "react"

interface SetupStep2Props {
    name: string
    setName: (name: string) => void
    setStep: (step: Step) => void
}

export const SetupStep2 = ({ name, setName, setStep }: SetupStep2Props) => {
    const { t } = useTranslation();

    const isValidName: ValidationResult = isValidInput(name);

    const handleKeyDown = useCallback((e: React.KeyboardEvent | KeyboardEvent) => {
        const trimmedName = name.trim();
        if (e.key === 'Enter' && trimmedName.length > 2 && trimmedName.length <= 20) {
            setStep(3);
        }
    }, [name, setStep]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-6">{t('components.setup.step2.howShouldWeCallYou')}</h2>
            <div className="flex items-center gap-4">
                <Tooltip
                    isOpen={name.length > 0 && !isValidName.isValid}
                    placement="bottom"
                    offset={20}
                    content={
                        <div className="flex flex-col gap-2 text-danger-500">
                            {t(isValidName.errorMessage || "")}
                        </div>
                    } >
                    <Input
                        type="text"
                        placeholder={t('components.setup.step2.yourName')}
                        size="lg"
                        value={name}
                        variant="faded"
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="max-w-[300px] w-full mx-auto"
                        maxLength={20}
                    />
                </Tooltip>
            </div>
        </div >
    )
}