export const IMPLEMENTED_LANGUAGES = [
    {
        code: 'en',
        name: 'English',
        icon: 'gb'
    },
    {
        code: 'es',
        name: 'Spanish',
        icon: 'es'
    },
    {
        code: 'ca',
        name: 'Catalan',
        icon: 'ca'
    }
];

export const getBrowserLanguage = () => {
    const browserLanguage = navigator.language || navigator.languages[0];

    if (IMPLEMENTED_LANGUAGES.map(lang => lang.code).includes(browserLanguage)) {
        return browserLanguage;
    }

    //fallback to the language without the region code
    const languageWithoutRegionCode = browserLanguage.split('-')[0];
    if (IMPLEMENTED_LANGUAGES.map(lang => lang.code).includes(languageWithoutRegionCode)) {
        return languageWithoutRegionCode;
    }

    // fallback to english if no match
    return 'en';
}