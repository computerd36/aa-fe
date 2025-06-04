import { Avatar, Select, SelectItem } from "@heroui/react"
import { IMPLEMENTED_LANGUAGES } from "../../utils/BrowserLanguage"
import { useLanguage } from "../../context/languageContext"
import { getFlagIconURL } from "../../utils/Flag";
import { useTranslation } from "react-i18next";


export const SetupStep1 = () => {
    const { language, setLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-6">{t('components.setup.step1.pleaseSelectLanguage')}</h2>

            <div className="flex items-center gap-4 mt-2">
                <Select
                    size='lg'
                    className="max-w-[150px] w-full mx-auto"
                    defaultSelectedKeys={[language.code]}
                    onChange={(event) => {
                        const value = event.target.value;
                        setLanguage(IMPLEMENTED_LANGUAGES.find(lang => lang.code === value) || IMPLEMENTED_LANGUAGES[0]);
                    }}
                    aria-label='Language Selector'
                    disallowEmptySelection
                >
                    {IMPLEMENTED_LANGUAGES.map((lang) => (
                        <SelectItem key={lang.code} startContent={<Avatar className='w-6 h-6' src={getFlagIconURL(lang.icon)} />}>
                            {t('general.languages.' + lang.name)}
                        </SelectItem>
                    ))}
                </Select>
            </div>

        </div>
    )
}