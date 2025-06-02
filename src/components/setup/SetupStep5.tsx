import { SliderValue } from "@heroui/react"
import { Metric } from "./SetupComponent"
import { Language } from "../../resources"

interface SetupStep5Props {
    name: string,
    metric: Metric,
    metricValue: SliderValue,
    language: Language
}

export const SetupStep5 = ({ name, metric, metricValue, language }: SetupStep5Props) => {

    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-2">Confirm your Configuration</h2>
            <div className="flex flex-col items-start gap-1 text-zinc-100 py-2">
                <p>Name: <span className="font-bold">{name}</span></p>
                <p>Language: <span className="font-bold">{language.name}</span></p>
                <p>Metric type: <span className="font-bold">{metric.charAt(0).toUpperCase() + metric.slice(1)}</span></p>
                <p>Alert value: <span className="font-bold">{metricValue} {metric === 'level' ? 'm' : 'm³/s'}</span></p>
            </div>
        </div>
    )
}