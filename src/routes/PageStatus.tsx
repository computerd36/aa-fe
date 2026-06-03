import { useEffect, useMemo, useState } from "react"
import { PageWrapper } from "../wrappers/PageWrapper"
import { StatusIconComponent } from "../components/StatusIconComponent";
import { AlertAiguaStatus } from "../resources";
import { getStatus } from "../backend/status";
import { StatusEntryComponent } from "../components/StatusEntryComponent";
import { StatusSystems } from "../constants";
import { useTranslation } from "react-i18next";


export const PageStatus = () => {
    const { t } = useTranslation();

    const [status, setStatus] = useState<AlertAiguaStatus>(
        StatusSystems.reduce((acc, system) => {
            acc[system.key] = "loading";
            return acc;
        }, {} as AlertAiguaStatus)
    );

    const totalStatus = useMemo(() => {
        const values = Object.values(status);
        if (values.includes("loading")) return "loading";
        if (values.every(s => s === "ok")) return "ok";
        if (values.includes("error")) return "error";
        if (values.includes("warning")) return "warning";
        return "unknown";
    }, [status]);

    useEffect(() => {
        const fetchStatus = async () => {
            const status = await getStatus()
            setStatus(status);
        }
        fetchStatus();
    }, []);


    return (
        <PageWrapper>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] flex flex-col items-center justify-center">
                    <h1 className="text-md md:text-xl xl:text-2xl text-gray-400">{t("general.status.statusFor")} <span className="text-lg md:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigua</span></h1>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <StatusIconComponent
                            className="w-36 h-36 mt-4"
                            status={totalStatus}
                        />
                        <p className="text-md md:text-lg xl:text-xl font-bold text-gray-300">
                            {t(`general.status.${totalStatus}`)}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-8 w-full lg:w-2/3 mx-auto">
                    {StatusSystems.map((system) => (
                        <StatusEntryComponent
                            key={system.key}
                            name={system.name}
                            status={status[system.key]}
                        />
                    ))}
                </div>
            </div>
        </PageWrapper>
    )
}