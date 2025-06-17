import { Metric } from "./SetupComponent"
import { ButtonComponent } from "../ButtonComponent";

import pushsaferLogo from "../../assets/pushsafer.webp"
import { useLanguage } from "../../context/languageContext";
import { useTranslation } from "react-i18next";

interface SetupStep6Props {
    name: string,
    metric: Metric,
    metricValue: number,
}

export const SetupStep6 = ({ name, metric, metricValue }: SetupStep6Props) => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-2">{t('components.setup.step6.addToPushsafer')}</h2>
            <h3 className="text-sm text-center text-zinc-200 text-balance mb-6">{t('components.setup.step6.subtitle')}</h3>
            <div className="flex flex-col items-center gap-5 text-zinc-100 py-2">
                <ButtonComponent
                    to={"pushsafer://guest+" + import.meta.env.VITE_PUSHSAFER_GUEST_ID + "|" + name + "-" + language.code + "-" + metric + "-" + metricValue.toFixed(2) + "|gs5664"}
                    text={t('components.setup.step6.addAaToPushsafer')}
                    icon={
                        <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                    }
                    isPrimary
                    isLoading={false}
                    targetBlank
                />
                <ButtonComponent
                    to={"pushsafer://guest+" + import.meta.env.VITE_PUSHSAFER_GUEST_ID + "|" + name + "-" + language.code + "-" + metric + "-" + metricValue.toFixed(2) + "|"}
                    text="add to pushsafer without group but with |"
                    icon={
                        <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                    }
                    isPrimary
                    isLoading={false}
                    targetBlank
                />
                <ButtonComponent
                    to={"pushsafer://guest+" + import.meta.env.VITE_PUSHSAFER_GUEST_ID + "|" + name + "-" + language.code + "-" + metric + "-" + metricValue.toFixed(2)}
                    text="add to pushsafer without group and without |"
                    icon={
                        <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                    }
                    isPrimary
                    isLoading={false}
                    targetBlank
                />
            </div>
        </div >
    )
}