import { ReactNode } from "react";
import { Chip, HowStepComponent } from "../components/HowStepComponent";
import { PageWrapper } from "../wrappers/PageWrapper"
import { useTranslation } from "react-i18next";

import How1 from "../assets/how/how-1.png"
import How2 from "../assets/how/how-2.png"
import How3 from "../assets/how/how-3.png"
import How4 from "../assets/how/how-4.png"

import { LuLanguages, LuSmartphone } from "react-icons/lu";
import { TbFreeRights } from "react-icons/tb";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { ButtonComponent } from "../components/ButtonComponent";
import { LogIn } from "lucide-react";


export const PageHow = () => {
    const { t } = useTranslation();


    const steps: { title: string; description: string; element: ReactNode; chips?: Chip[], }[] = [
        {
            title: t('pages.how.steps.step1.title'),
            description: t('pages.how.steps.step1.description'),
            element: <img src={How1} alt="Showing both the logos of AlertAigua and Pushsafer stacked on top of each other" className="h-full rounded-lg shadow-lg" />,
            chips: [
                { icon: <LuSmartphone size={24} />, label: "Android & iOS" },
                { icon: <TbFreeRights size={24} />, label: "Free" },
            ],
        },
        {
            title: t('pages.how.steps.step2.title'),
            description: t('pages.how.steps.step2.description'),
            element: <img src={How2} alt="Showing two sliders controlling water level and flow rate as they are adjusted" className="h-full rounded-lg shadow-xl" />,
            chips: [
                { icon: <FaHouseFloodWaterCircleArrowRight size={24} />, label: "Waterlevel or Flowrate" },
                { icon: <LuLanguages size={24} />, label: "Spanish, Catalan or English" },
            ],
        }, {
            title: t('pages.how.steps.step3.title'),
            description: t('pages.how.steps.step3.description'),
            element: <img src={How3} alt="Showing a button and a QR code to add AlertAigua to Pushsafer" className="h-full rounded-lg shadow-lg" />
        }, {
            title: t('pages.how.steps.step4.title'),
            description: t('pages.how.steps.step4.description'),
            element: <img src={How4} alt="Showing some notifications being received, the one in focus says 'Flood Warning! Water level has exceeded your threshold!...'" className="h-full rounded-lg shadow-lg" />
        },
    ];


    return (
        <PageWrapper hasFooter={true}>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] mb-16 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl text-zinc-50 font-semibold text-center">
                        {t('pages.how.title.prefix')}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigua</span>
                        {" "}{t('pages.how.title.suffix')}
                    </h1>
                    <h2 className="text-md md:text-lg xl:text-xl text-zinc-200 text-center mt-4 text-balance">
                        {t('pages.how.subtitle')}
                    </h2>
                </div>

                <div className="mb-16">
                    {steps.map((step, index) => (
                        <HowStepComponent
                            key={"step-" + index}
                            stepNumber={(index + 1).toString()}
                            title={step.title}
                            description={step.description}
                            visual={step.element}
                            reverse={index % 2 === 1}
                            chips={step.chips || []}
                        />
                    ))}
                </div>

                <div className="w-full mb-16 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl text-zinc-50 font-semibold text-center text-balance mb-4">
                        {t('pages.how.cta.prefix')}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t('pages.how.cta.highlight')}</span>
                    </h2>
                    <ButtonComponent
                        icon={<LogIn />}
                        text={t('pages.landing.getStarted')}
                        to="/setup"
                        isPrimary
                    />
                </div>
            </div>
        </PageWrapper >
    )
};
