import { SliderValue } from "@heroui/react"
import { Metric } from "./SetupComponent"
import { ButtonComponent } from "../ButtonComponent";

import pushsaferLogo from "../../assets/pushsafer.webp"
import { useLanguage } from "../../context/languageContext";

interface SetupStep6Props {
    name: string,
    metric: Metric,
    metricValue: SliderValue,
}

export const SetupStep6 = ({ name, metric, metricValue }: SetupStep6Props) => {
    const { language } = useLanguage();

    metricValue = Array.isArray(metricValue) ? metricValue[0] : metricValue;



    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-2">Add to Pushsafer</h2>
            <div className="flex flex-col items-center gap-5 text-zinc-100 py-2">
                <ButtonComponent
                    to={"pushsafer://guest+" + import.meta.env.VITE_PUSHSAFER_GUEST_ID + "|" + name + "-" + language.code + "-" + metric + "-" + metricValue.toFixed(2)}
                    text="Add AlertAigües to Pushsafer"
                    icon={
                        <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                    }
                    isPrimary
                    isLoading={false}
                />
            </div>
        </div >
    )
}