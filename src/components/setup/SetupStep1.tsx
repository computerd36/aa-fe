import { Avatar, Select, SelectItem } from "@heroui/react"
import { Language } from "../../resources"
import { useMemo } from "react"
import catFlag from "../../assets/Flag_of_Catalonia.svg"


interface SetupStep1Props {
    language: Language | undefined,
    setLanguage: (language: Language | undefined) => void
}

export const SetupStep1 = ({ language, setLanguage }: SetupStep1Props) => {
    const languages: Language[] = useMemo(() => [
        { code: 'en', name: 'English', flag: 'us' },
        { code: 'es', name: 'Spanish', flag: 'es' },
        { code: 'ca', name: 'Catalan', flag: 'ca' },
    ], []);

    const getFlagLink = (code: string) => {
        switch (code) {
            case 'ca':
                return  catFlag;
            default:
                return "https://flagcdn.com/" + code + ".svg";
        }
    }

    return (
        <div className="w-full">
            <h2 className="text-md text-center font-medium text-zinc-50">Please select your language</h2>
            <h2 className="text-md text-center font-medium text-zinc-50">Por favor seleccione su idioma</h2>
            <h2 className="text-md text-center font-medium text-zinc-50">Seleccioneu el vostre idioma</h2>
            <div className="flex items-center gap-4 mt-2">
                <Select
                    size='sm'
                    className="max-w-[150px] w-full mx-auto"
                    defaultSelectedKeys={language ? [language.code] : []}
                    onChange={(event) => {
                        const value = event.target.value;
                        const selectedLanguage = languages.find(lang => lang.code === value);
                        setLanguage(selectedLanguage);
                    }}
                    aria-label='Language Selector'
                    disallowEmptySelection
                >
                    {languages.map((lang) => (
                        <SelectItem key={lang.code} startContent={<Avatar className='w-6 h-6' src={getFlagLink(lang.flag)} />}>
                            {lang.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>

        </div>
    )
}