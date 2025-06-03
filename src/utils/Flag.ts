import catalanFlag from '../assets/catalonia.svg';

export const getFlagIconURL = (languageCode: string): string => {
    switch (languageCode) {
        case 'ca':
            return catalanFlag;
        default:
            return `https://flagcdn.com/${languageCode}.svg`;
    }
}