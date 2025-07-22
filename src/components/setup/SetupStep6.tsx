import { useTranslation } from "react-i18next";

import { Metric } from "./SetupComponent"
import { PushsaferButtonOrQR } from "../PushsaferButtonOrQR";

interface SetupStep6Props {
    name: string,
    metric: Metric,
    metricValue: number,
}



export const SetupStep6 = ({ name, metric, metricValue }: SetupStep6Props) => {
    const { t } = useTranslation();


    // get the device type (ios, android, pc) based on the user agent
    const userAgent = navigator.userAgent.toLowerCase();
    let device: "android" | "ios" | "pc" = "pc";
    if (userAgent.includes("android")) {
        device = "android";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        device = "ios";
    }



    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-2">{t('components.setup.step6.addToPushsafer')}</h2>
            <h3 className="text-sm text-center text-zinc-200 text-balance mb-6">{t('components.setup.step6.subtitle')}</h3>
            <div className="flex flex-col items-center gap-5 text-zinc-100 py-2">
                <PushsaferButtonOrQR
                    name={name}
                    metric={metric}
                    metricValue={metricValue}
                    device={device}
                />
            </div>
        </div >
    )
}