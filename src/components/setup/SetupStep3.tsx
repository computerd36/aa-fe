import { Slider, SliderValue, Switch } from "@heroui/react"
import { Metric } from "./SetupComponent"
import { FaArrowsUpToLine } from "react-icons/fa6"
import { TbArrowWaveRightDown } from "react-icons/tb"
import { AverageDaysPerYearComponent } from "../AverageDaysPerYearComponent"
import { useEffect } from "react"

interface SetupStep3Props {
    metric: Metric
    setMetric: (metric: Metric) => void
    metricValue: SliderValue
    setMetricValue: (value: SliderValue) => void
}

export const SetupStep3 = ({ metric, setMetric, metricValue, setMetricValue }: SetupStep3Props) => {

    // ensure that its a number because sliderValue can be an array
    metricValue = Array.isArray(metricValue) ? metricValue[0] : metricValue;

    const formatDischarge = (v: number): React.ReactNode =>
        metric === 'level'
            ? `${new Intl.NumberFormat(undefined, {
                style: 'unit',
                unit: 'meter',
                unitDisplay: 'narrow',
                maximumFractionDigits: 1,
            }).format(v)}`
            :
            `${new Intl.NumberFormat(undefined, {
                style: 'unit',
                unit: 'meter',
                unitDisplay: 'narrow',
                maximumFractionDigits: 0,
            }).format(v)}\u00B3/s`;

    useEffect(() => {
        // Ensure metricValue is within bounds when metric changes
        if (metric === 'level') {
            if (metricValue < 0.5 || metricValue > 4) setMetricValue(0.5);
        } else {
            if (metricValue < 5) setMetricValue(5);
            if (metricValue > 200) setMetricValue(200);
        }
    }, [metric, metricValue, setMetricValue]);

    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-4">Set Alert Threshold</h2>
            <div className="flex items-center flex-col gap-2">
                <div className="flex items-center gap-2 text-white">
                    <span>Water Level</span>
                    <Switch
                        isSelected={metric === "flowrate"}
                        onValueChange={(checked) =>
                            setMetric(checked ? "flowrate" : "level")
                        }
                        endContent={<FaArrowsUpToLine />}
                        startContent={<TbArrowWaveRightDown />}
                        classNames={{
                            wrapper: `bg-gradient-to-r from-primary to-secondary`,
                            endContent: `text-white`,
                            startContent: `text-white`,
                        }}
                    />
                    <span>Flow Rate</span>
                </div>
                <Slider
                    className={`w-full text-white`}
                    value={metricValue}
                    onChange={(value) => setMetricValue(Array.isArray(value) ? value[0] : value)}
                    label={`Set ${metric} value`}
                    aria-label={`Set ${metric} value`}
                    minValue={metric === 'level' ? 0.5 : 5}
                    maxValue={metric === 'level' ? 4 : 200}
                    step={metric === 'level' ? 0.1 : 1}
                    renderLabel={() => metric.charAt(0).toUpperCase() + metric.slice(1)}
                    getValue={(value) => value + (metric === 'level' ? 'm' : 'm³/s')}
                    showTooltip={true}
                    classNames={{
                        filler: "bg-gradient-to-r from-primary to-secondary",
                        thumb: "bg-gradient-to-r from-primary to-secondary",
                        track: "bg-zinc-700",
                    }}
                    tooltipProps={{
                        content: formatDischarge(metricValue),
                        offset: 10,
                        placement: "top",
                        classNames: {
                            base: [
                                // arrow color
                                "before:bg-gradient-to-r before:from-primary before:to-secondary",
                            ],
                            content: [
                                "py-2 shadow-xl",
                                "text-white text-md font-bold bg-gradient-to-r from-primary to-secondary/80",
                            ],
                        },
                    }}
                    tooltipValueFormatOptions={
                        metric === 'level'
                            ? {                         // → “2 m”, “3.1 m” …
                                style: 'unit',
                                unit: 'meter',
                                unitDisplay: 'narrow',  // gives just “m”, not “meters”
                                maximumFractionDigits: 1
                            }
                            : {                         // → “120 m³/s”, “25 m³/s” …
                                style: 'unit',
                                unit: 'meter-per-second', // supported in modern engines :contentReference[oaicite:1]{index=1}
                                unitDisplay: 'narrow'
                            }
                    }
                />
            </div>
            <p className={"text-white text-center text-sm"}>This {metric === "level" ? "level" : "flowrate"} was reached at averaged <AverageDaysPerYearComponent value={Array.isArray(metricValue) ? metricValue[0] : metricValue} metric={metric} /> days per year (2018 - 2025)</p>
        </div>
    )
}