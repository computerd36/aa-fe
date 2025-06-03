

export interface UserConfig {
    name: string;
    metric: string;
    metricValue: number;
    language: Language;
}

export interface Language {
    code: string;
    name: string;
    icon: string;
}