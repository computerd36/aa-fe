import { Chip, HowStepComponent } from "../components/HowStepComponent";
import { PageWrapper } from "../wrappers/PageWrapper"
import { useTranslation } from "react-i18next";

import How1 from "../assets/how/how-1.png"
import How2 from "../assets/how/how-2.png"
import How3 from "../assets/how/how-3.png"
import How4 from "../assets/how/how-4.png"


export const PageHow = () => {
    const { t } = useTranslation();


    const steps: { title: string; description: string; element: React.ReactNode; chips?: Chip[], }[] = [
        {
            title: t('pages.how.steps.step1.title'),
            description: t('pages.how.steps.step1.description'),
            element: <img src={How1} alt="How 1" className="w-full rounded-lg shadow-lg" />,
            chips: [
                { icon: <img src="/assets/icons/phone.svg" alt="Phone" className="w-4" />, label: "Android & iOS" }, //lucide banknote X here
                { icon: <img src="/assets/icons/cloud.svg" alt="Cloud" className="w-4" />, label: "Free" }, // lucide banknote X here
            ],
        },
        {
            title: t('pages.how.steps.step2.title'),
            description: t('pages.how.steps.step2.description'),
            element: <img src={How2} alt="How 2" className="w-full rounded-lg shadow-lg" />
        }, {
            title: t('pages.how.steps.step3.title'),
            description: t('pages.how.steps.step3.description'),
            element: <img src={How3} alt="How 3" className="w-full rounded-lg shadow-lg" />
        }, {
            title: t('pages.how.steps.step4.title'),
            description: t('pages.how.steps.step4.description'),
            element: <img src={How4} alt="How 4" className="w-full rounded-lg shadow-lg" />

        },
    ];


    return (
        <PageWrapper>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-4xl xl:text-6xl text-zinc-50 font-semibold">How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">AlertAigua</span> works</h1>
                    <h2 className="text-md md:text-lg xl:text-xl text-zinc-200 text-center mt-4">Four short steps and your phone becomes a flood early-warning system. No new account, no hardware. Just push notifications, the moment the water rises.</h2>
                </div>

                {steps.map((step, index) => (
                    <HowStepComponent
                        key={"step-" + index}
                        stepNumber={(index + 1).toString().padStart(2, '0')}
                        title={step.title}
                        description={step.description}
                        screenTag={`Step ${index + 1}`}
                        visual={step.element}
                        reverse={index % 2 === 1}
                        chips={step.chips || []}
                    />
                ))}
            </div>
        </PageWrapper>
    )
};