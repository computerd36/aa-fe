import { ChevronLeft, ChevronRight, LucideMessageCircleQuestion, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, SliderValue } from "@heroui/react";
import { Language } from "../../resources";
import { SetupStep2 } from "./SetupStep2";
import { SetupStep3 } from "./SetupStep3";
import { SetupStep4 } from "./SetupStep4";
import { SetupStep5 } from "./SetupStep5";
import { SetupStep6 } from "./SetupStep6";
import { SetupStep1 } from "./SetupStep1";


type Step = 1 | 2 | 3 | 4 | 5 | 6;
export type Metric = 'level' | 'flowrate';
export type MetricValue = SliderValue;

export const SetupComponent = () => {

    const [step, setStep] = useState<Step>(1);

    // form states
    const [name, setName] = useState<string>('');
    const [metrics, setMetrics] = useState<Metric>('level');
    const [metricValue, setMetricValue] = useState<MetricValue>(2.5);
    const [language, setLanguage] = useState<Language | undefined>(undefined);




    const renderSteps = (step: Step) => {
        switch (step) {
            case 1:
                return <SetupStep1
                    language={language}
                    setLanguage={setLanguage}
                />
            case 2:
                return <SetupStep2
                    name={name}
                    setName={setName}
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
                if (!language) setStep(1);
                return <SetupStep5
                    name={name}
                    metric={metrics}
                    metricValue={metricValue}
                    language={language!}
                />
            case 6:
                if (!language) setStep(1);
                return <SetupStep6
                    name={name}
                    metric={metrics}
                    metricValue={metricValue}
                    language={language!}
                />
        }

    }


    return (
        <div className="w-full md:w-2/3 xl:w-1/2 max-w-[800px] h-3/4 max-h-[500px] md:h-1/2 flex flex-col p-8">

            {/* header */}
            <div className="w-full h-8 flex items-center justify-between">
                <Link to={'/'} className="flex items-center gap-1 text-red-400 font-medium"><X />Cancel Setup</Link>
                <Link to={'/'} className="flex items-center gap-1 text-primary font-medium"><LucideMessageCircleQuestion /> Help</Link>
            </div>

            {/* content */}
            <div className="grow flex flex-col items-center justify-center">
                {renderSteps(step)}
            </div>

            {/* navigation */}
            <div className="flex items-center justify-center gap-2">
                <Button
                    variant="faded"
                    className="bg-zinc-950 text-zinc-50 flex items-center justify-center"
                    onPress={() => {
                        setStep(step - 1 as Step)
                    }}
                    title="Back"
                    isDisabled={step === 1}
                    startContent={<ChevronLeft />}
                >
                    Back
                </Button>

                <Button
                    variant="faded"
                    className="bg-zinc-950 text-zinc-50"
                    onPress={() => setStep(step + 1 as Step)}
                    isDisabled={(step === 1 && !language) || (step === 2 && name.length < 3) || (step === 6)}
                    endContent={<ChevronRight />}
                >
                    Next
                </Button>
            </div>

        </div>
    )
}