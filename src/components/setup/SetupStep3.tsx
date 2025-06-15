import { Slider, Tab, Tabs } from "@heroui/react"
import { Metric } from "./SetupComponent"
import { AverageDaysPerYearComponent } from "../AverageDaysPerYearComponent"
import { useEffect } from "react"
import { TriangleAlert } from "lucide-react"
import { useTranslation } from "react-i18next"

interface SetupStep3Props {
    metric: Metric
    setMetric: (metric: Metric) => void
    metricValue: number
    setMetricValue: (value: number) => void
}

export const SetupStep3 = ({ metric, setMetric, metricValue, setMetricValue }: SetupStep3Props) => {
    const { t } = useTranslation();

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
        // ensure metricValue is reset to default value if switch between metrics
        if (metric === 'level') setMetricValue(1.5);
        else if (metric === 'flowrate') setMetricValue(20);
    }, [metric, setMetricValue]);

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-6">{t('components.setup.step3.setAlertThreshold')}</h2>
            <div className="flex items-center flex-col gap-2">
                <div className="flex items-center gap-2 text-white mb-4">
                    <Tabs
                        selectedKey={metric}
                        onSelectionChange={(key) => {
                            if (key === 'level' || key === 'flowrate') {
                                setMetric(key as Metric);
                            }
                        }}
                    >
                        <Tab key="level" title={t('components.setup.step3.waterLevel')} />
                        <Tab key="flowrate" title={t('components.setup.step3.flowRate')} />
                    </Tabs>
                </div>
                <div className="flex items-center gap-4 px-4 py-2 mb-4 text-white text-center text-sm bg-background2 ring-1 ring-text/20 rounded-lg">
                    <TriangleAlert className="min-w-6 min-h-6 md:w-8 md:h-8" />
                    <AverageDaysPerYearComponent metric={metric} value={metricValue} />
                </div>
                <Slider
                    className={`w-full text-white mb-12`}
                    value={metricValue}
                    onChange={(value) => setMetricValue(Array.isArray(value) ? value[0] : value)}
                    aria-label={`Set ${metric} value`}
                    minValue={metric === 'level' ? 0.5 : 5}
                    maxValue={metric === 'level' ? 4 : 200}
                    step={metric === 'level' ? 0.1 : 1}
                    getValue={(value) => value + (metric === 'level' ? 'm' : 'm³/s')}
                    showTooltip={true}
                    classNames={{
                        filler: "bg-gradient-to-r from-primary to-secondary",
                        thumb: "bg-gradient-to-r from-primary to-secondary",
                        track: "bg-zinc-700",
                    }}
                    tooltipProps={{
                        content: formatDischarge(metricValue),
                        isOpen: true,
                        offset: 10,
                        placement: "bottom",
                        classNames: {
                            base: [
                                // arrow color
                                "before:bg-gradient-to-r before:from-primary before:to-primary/80",
                            ],
                            content: [
                                "py-2 shadow-xl",
                                "text-white text-sm font-bold bg-gradient-to-r from-primary to-primary/80",
                            ],
                        },
                    }}
                    tooltipValueFormatOptions={
                        metric === 'level'
                            ? {
                                style: 'unit',
                                unit: 'meter',
                                unitDisplay: 'narrow',
                                maximumFractionDigits: 1
                            }
                            : {
                                style: 'unit',
                                unit: 'meter-per-second',
                                unitDisplay: 'narrow'
                            }
                    }
                />
            </div>
        </div>
    )
}