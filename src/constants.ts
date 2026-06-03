import { AlertAiguaStatus } from "./resources";

export const StatusSystems: { name: string; key: keyof AlertAiguaStatus }[] = [
    {
        name: "Pushsafer API",
        key: "pushsafer_api"
    },
    {
        name: "Pushsafer iOS App",
        key: "pushsafer_iosApp"
    },
    {
        name: "Pushsafer Android App",
        key: "pushsafer_androidApp"
    },
    {
        name: "SAIH Ebro API",
        key: "saihebro_api"
    },
    {
        name: "SAIH Ebro Station",
        key: "saihebro_station"
    }
];