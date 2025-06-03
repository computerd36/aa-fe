import React, { useEffect, useState } from 'react';
import i18n from '../i18n';
import { getBrowserLanguage, IMPLEMENTED_LANGUAGES } from '../utils/BrowserLanguage';
import { Language } from '../resources';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
    language: { code: 'en', name: 'English', icon: 'gb' }, // Default language
    setLanguage: () => { }
});

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const storedLanguage = localStorage.getItem('aa-language');

        if (storedLanguage) {
            const lang = IMPLEMENTED_LANGUAGES.find(lang => lang.code === storedLanguage);
            if (lang) {
                return lang;
            }
        }
        const browserLanguage = getBrowserLanguage();
        const defaultLanguage = IMPLEMENTED_LANGUAGES.find(lang => lang.code === browserLanguage) || IMPLEMENTED_LANGUAGES[0];
        return defaultLanguage;
    });

    useEffect(() => {
        localStorage.setItem('aa-language', language.code);

        document.documentElement.lang = language.code;

        i18n.changeLanguage(language.code).catch((error) => {
            console.error('Error changing language:', error);
        });
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => React.useContext(LanguageContext);