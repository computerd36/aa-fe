import { useEffect, useState } from "react"
import { PageWrapper } from "../wrappers/PageWrapper"
import { StatusIconComponent } from "../components/StatusIconComponent";
import { AlertAiguaStatus } from "../resources";
import { getStatus } from "../backend/status";


export const PageStatus = () => {
    const [status, setStatus] = useState<AlertAiguaStatus>({
        aa_status: "loading",
        pushsafer_status: "loading",
        saihebro_status: "loading"
    });

    // total status based on the individual statuses
    const totalStatus = Object.values(status).every(s => s === "ok") ? "ok" :
        Object.values(status).some(s => s === "loading") ? "loading" :
            Object.values(status).some(s => s === "error") ? "error" :
                Object.values(status).some(s => s === "warning") ? "warning" : "unknown";

    useEffect(() => {
        const fetchStatus = async () => {
            await getStatus()
                .then((data) => {
                    setStatus(data);
                });
        }
        fetchStatus();
    }, []);


    return (
        <PageWrapper>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] flex flex-col items-center justify-center">
                    <h1 className="text-md md:text-xl xl:text-2xl text-gray-400">Status for <span className="text-lg md:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigua</span></h1>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <StatusIconComponent
                            className="w-36 h-36 mt-4"
                            status={totalStatus}
                        />
                        <p className="text-md md:text-lg xl:text-xl font-bold text-gray-300">
                            {totalStatus === "ok" ? "All systems operational" :
                                totalStatus === "loading" ? "Loading status..." :
                                    totalStatus === "error" ? "Some services are down" :
                                        totalStatus === "warning" ? "Some services have issues" :
                                            "Unknown status"}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-4 mt-8 w-full lg:w-2/3 mx-auto">
                        <div className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-row items-center justify-between">
                            <span className="text-md md:text-lg xl:text-xl text-gray-300">AlertAigua Service</span>
                            <StatusIconComponent
                                status={status.aa_status}
                                className="w-8 h-8"
                            />
                        </div>
                        <div className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-row items-center justify-between">
                            <span className="text-md md:text-lg xl:text-xl text-gray-300">Pushsafer Service</span>
                            <StatusIconComponent
                                status={status.pushsafer_status}
                                className="w-8 h-8"
                            />
                        </div>
                        <div className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-row items-center justify-between">
                            <span className="text-md md:text-lg xl:text-xl text-gray-300">SAIH Ebro API</span>
                            <StatusIconComponent
                                status={status.saihebro_status}
                                className="w-8 h-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}