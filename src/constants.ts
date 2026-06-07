import { AlertAiguaStatus } from "./resources";

export const StatusSystems: { name: string; key: keyof AlertAiguaStatus }[] = [
    {
        name: "AlertAigua",
        key: "aa_status"
    },
    {
        name: "Pushsafer",
        key: "pushsafer_status"
    },
    {
        name: "SAIH Ebro",
        key: "saihebro_status"
    }
];