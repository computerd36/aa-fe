import { Slider, SliderValue, Switch } from "@heroui/react"
import { Metric } from "./SetupComponent"
import { FaArrowsUpToLine } from "react-icons/fa6"
import { TbArrowWaveRightDown } from "react-icons/tb"
import { AverageDaysPerYearComponent } from "../AverageDaysPerYearComponent"

interface SetupStep3Props {
    metric: Metric
    setMetric: (metric: Metric) => void
    metricValue: SliderValue
    setMetricValue: (value: SliderValue) => void
}

export const SetupStep3 = ({ metric, setMetric, metricValue, setMetricValue }: SetupStep3Props) => {

    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-4">Configure Metrics</h2>
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
                            wrapper: `bg-primary`,
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
                    minValue={metric === 'level' ? 1 : 20}
                    maxValue={metric === 'level' ? 4 : 200}
                    step={metric === 'level' ? 0.1 : 1}
                    renderLabel={() => metric.charAt(0).toUpperCase() + metric.slice(1)}
                    getValue={(value) => value + (metric === 'level' ? 'm' : 'm³/s')}
                />



            </div>
            <p className={"text-white text-center text-sm"}>This level was reached at averaged <AverageDaysPerYearComponent value={Array.isArray(metricValue) ? metricValue[0] : metricValue} metric={metric} /> days per year (2018 - 2025)</p>
        </div>
    )
}