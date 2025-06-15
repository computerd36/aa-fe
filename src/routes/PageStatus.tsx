import { useState } from "react"
import { PageWrapper } from "../wrappers/PageWrapper"
import { StatusIconComponent } from "../components/StatusIconComponent";
import { AlertAiguaStatus } from "../resources";


export const PageStatus = () => {


    const [status] = useState<AlertAiguaStatus>({
        aa_status: "ok",
        pushsafer_status: "ok",
        saihebro_status: "ok"
    });

    //const totalStatus only holds "ok" status if all services are operational,
    // otherwise it will be "warning" or "error" based on the worst status
    const totalStatus = Object.values(status).every(s => s === "ok") ? "ok" :
        Object.values(status).some(s => s === "warning") ? "warning" : "error";

    return (
        <PageWrapper>
            <div className="w-full px-8 md:px-[20vw]">

                <div className="w-full mt-[10dvh] flex flex-col items-center justify-center">
                    <h1 className="text-md md:text-xl xl:text-2xl text-gray-400">Status for <span className="text-lg md:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigua</span></h1>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <StatusIconComponent
                            className="w-36 h-36 text-green-500 mt-4"
                            status={totalStatus}
                        />
                        <p className="text-md md:text-lg xl:text-xl font-bold text-gray-300">All systems operational</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-4 mt-8">
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