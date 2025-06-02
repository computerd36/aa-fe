import { useState } from "react"
import { PageWrapper } from "../wrappers/PageWrapper"
import { StatusIconComponent } from "../components/StatusIconComponent";

interface ApplicationStatus {
    api: {
        title: string;
        status: 'operational' | 'degraded' | 'down';
        message: string;
    };
    registration: {
        title: string;
        status: 'operational' | 'degraded' | 'down';
        message: string;
    };
    pushsafer: {
        title: string;
        status: 'operational' | 'degraded' | 'down';
        message: string;
    },
    saihEbro: {
        title: string;
        status: 'operational' | 'degraded' | 'down';
        message: string;
    };
}


export const PageStatus = () => {

    fetch('https://pushsafer.statuspage.io/api/v2/summary.son')
        .then(r => r.json())
        .then(d => console.log(d.status.description));

    const [status, setStatus] = useState<ApplicationStatus>({
        api: {
            title: 'AlertAigües API',
            status: 'operational',
            message: 'API is running smoothly'
        },
        registration: {
            title: 'AlertAigües Registration',
            status: 'operational',
            message: 'Registration service is available'
        },
        pushsafer: {
            title: 'Pushsafer Service',
            status: 'operational',
            message: 'Pushsafer service is operational'
        },
        saihEbro: {
            title: 'SAIH Ebro API',
            status: 'operational',
            message: 'SAIH Ebro service is operational'
        }
    });

    //const totalStatus only holds operational status if all services are operational,
    // otherwise it will be degraded or down based on the worst status
    const totalStatus = Object.values(status).reduce((acc, service) => {
        if (service.status === 'down') return 'down';
        if (service.status === 'degraded' && acc !== 'down') return 'degraded';
        return acc;
    }, 'operational' as 'operational' | 'degraded' | 'down');


    return (
        <PageWrapper>
            <div className="w-full px-8 md:px-[20vw]">

                <div className="w-full mt-[10dvh] flex flex-col items-center justify-center">
                    <h1 className="text-md md:text-xl xl:text-2xl text-gray-400">Status for <span className="text-lg md:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigües</span></h1>
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
                        {Object.entries(status).map(([key, { title: title, status: status, message: message }]) => (
                            <div key={key} className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-row items-center justify-between">

                                <div className="flex flex-col items-start">
                                    <h2 className="text-lg font-semibold text-gray-200 capitalize">{title}</h2>
                                    <p className={`text-md ${status === 'operational' ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
                                </div>
                                <StatusIconComponent
                                    className="w-8 h-8"
                                    status={status}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}