import { Metric } from "./SetupComponent"
import { useLanguage } from "../../context/languageContext"
import { AverageDaysPerYearComponent } from "../AverageDaysPerYearComponent";
import { TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SetupStep5Props {
    name: string,
    metric: Metric,
    metricValue: number,
}

export const SetupStep5 = ({ name, metric, metricValue }: SetupStep5Props) => {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-2">{t('components.setup.step5.title')}</h2>
            <div className="flex flex-col items-start gap-1 text-zinc-100 py-2">
                <table className="w-full mx-auto table-auto">
                    <tbody>
                        <tr>
                            <td className="py-1 px-2">{t('components.setup.step5.name')}:</td>
                            <td className="py-1 px-2 font-bold text-right">{name}</td>
                        </tr>
                        <tr>
                            <td className="py-1 px-2">{t('components.setup.step5.language')}:</td>
                            <td className="py-1 px-2 font-bold text-right">{t('general.languages.' + language.name)}</td>
                        </tr>
                        <tr>
                            <td className="py-1 px-2">{t('components.setup.step5.metricType')}:</td>
                            <td className="py-1 px-2 font-bold text-right">
                                {
                                    metric === "level" ?
                                        t('components.setup.step3.waterLevel')
                                        :
                                        t('components.setup.step3.flowRate')
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-1 px-2">{t('components.setup.step5.alertValue')}:</td>
                            <td className="py-1 px-2 font-bold text-right">
                                {metricValue} {metric === "level" ? "m" : "m³/s"}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex items-center gap-4 px-4 py-2 mx-auto mt-2 mb-4 text-white text-center text-sm bg-background2 ring-1 ring-text/20 rounded-lg">
                    <TriangleAlert className="min-w-6 min-h-6 md:w-8 md:h-8" />
                    <AverageDaysPerYearComponent metric={metric} value={metricValue} />
                </div>
            </div>
        </div>
    )
}