

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

export type StatusType = "ok" | "warning" | "error" | "loading" | "unknown";


export type AlertAiguaStatus = {
    [key: string]: StatusType;
};