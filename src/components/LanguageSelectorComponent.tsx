//Imports
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { useLanguage } from '../context/languageContext';
import { IMPLEMENTED_LANGUAGES } from "../utils/BrowserLanguage";
import { getFlagIconURL } from "../utils/Flag";
import { useTranslation } from "react-i18next";

/**
 * LanguageSelectorComponent - A component that allows users to select their preferred language.
 * It displays a dropdown with available languages, each represented by a flag icon.
 * When a language is selected, it updates the application state and persists the selection in local storage.
 * @returns {TSX} - Returns a dropdown menu for language selection.
 */

// Component
export const LanguageSelectorComponent = () => {
    const { language, setLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <Dropdown
            placement="bottom-end"
            backdrop="blur"
        >
            <DropdownTrigger
                aria-label="Language Selector"
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-full"
            >
                <Avatar className='h-8 w-8' src={getFlagIconURL(language.icon)} />
            </DropdownTrigger>

            <DropdownMenu
                disallowEmptySelection
                aria-label="Language Selector"
                selectedKeys={[language.code]}
                selectionMode="single"
                variant="flat"
                onAction={(key) => {
                    const selectedLanguage = IMPLEMENTED_LANGUAGES.find(lang => lang.code === key);
                    if (selectedLanguage) {
                        setLanguage(selectedLanguage);
                    }
                }}
            >
                {IMPLEMENTED_LANGUAGES.map((lang) => (
                    <DropdownItem
                        key={lang.code}
                        startContent={<Avatar className='w-6 h-6' src={getFlagIconURL(lang.icon)} />}
                    >
                        {t('general.languages.' + lang.name)}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
