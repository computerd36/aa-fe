import { ChevronLeft, LucideCircleHelp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { SetupStep2 } from "./SetupStep2";
import { SetupStep3 } from "./SetupStep3";
import { SetupStep4 } from "./SetupStep4";
import { SetupStep5 } from "./SetupStep5";
import { SetupStep6 } from "./SetupStep6";
import { SetupStep1 } from "./SetupStep1";
import { useTranslation } from "react-i18next";
import { isValidInput } from "../../utils/Validator";


export type Step = 1 | 2 | 3 | 4 | 5 | 6;
export type Metric = 'level' | 'flowrate';

export const SetupComponent = () => {
    const { t } = useTranslation();

    const [step, setStep] = useState<Step>(1);

    // form states
    const [name, setName] = useState<string>('');
    const [metrics, setMetrics] = useState<Metric>('level');
    const [metricValue, setMetricValue] = useState<number>(1.5);

    const renderSteps = (step: Step) => {
        switch (step) {
            case 1:
                return <SetupStep1 />
            case 2:
                return <SetupStep2
                    name={name}
                    setName={setName}
                    setStep={setStep}
                />
            case 3:
                return <SetupStep3
                    metric={metrics}
                    setMetric={setMetrics}
                    metricValue={metricValue}
                    setMetricValue={setMetricValue}
                />
            case 4:
                return <SetupStep4 />
            case 5:
                return <SetupStep5
                    name={name}
                    metric={metrics}
                    metricValue={metricValue}
                />
            case 6:
                return <SetupStep6
                    name={name}
                    metric={metrics}
                    metricValue={metricValue}
                />
        }

    }


    return (
        <div className="w-full md:w-2/3 xl:w-1/2 max-w-[800px] h-3/4 min-h-[500px] md:h-1/2 flex flex-col pt-4 pb-8 px-8 bg-background1 rounded-xl ring-1 ring-text/20 shadow-lg">

            {/* header */}
            <div className="w-full h-8 flex items-center justify-between">
                <Link to={'/'} className="flex items-center gap-1 text-red-400 font-medium">{t('components.setup.cancel')}</Link>
                <Link to={'/'} className="flex items-center gap-1 text-primary font-medium"><LucideCircleHelp /></Link>
            </div>

            {/* content */}
            <div className="grow flex flex-col items-center justify-center">
                {renderSteps(step)}
            </div>

            {/* navigation */}
            <div className="flex items-center justify-between gap-2">
                <Button
                    variant={"light"}
                    className="text-zinc-50 flex items-center justify-center"
                    onPress={() => {
                        setStep(step - 1 as Step)
                    }}
                    title={t('components.setup.back')}
                    isDisabled={step === 1}
                    startContent={<ChevronLeft />}
                >
                    {t('components.setup.back')}
                </Button>

                <Button
                    variant="solid"
                    className={`bg-background2 text-text text-xl ring-2 ring-primary ${step === 6 ? 'hidden' : ''}`}
                    onPress={() => {
                        setStep(step + 1 as Step)
                    }}
                    isDisabled={(step === 2 && !isValidInput(name).isValid) || (step === 6)}
                >
                    <span className="flex items-center justify-center gap-2">
                        {(step === 1 || step === 2 || step === 3 || step === 5) ? t('components.setup.confirm') : t('components.setup.next')}

                    </span>
                </Button>
            </div>

        </div>
    )
}