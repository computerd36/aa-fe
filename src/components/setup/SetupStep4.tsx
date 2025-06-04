import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../ButtonComponent"
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6"


export const SetupStep4 = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h2 className="text-3xl text-center font-medium text-zinc-50 mb-2">{t('components.setup.step4.title')}</h2>
            <h3 className="text-sm text-center text-zinc-200 text-balance mb-6">{t('components.setup.step4.subtitle')}</h3>
            <div className="w-full flex flex-col md:flex-row justify-center gap-1 text-zinc-100">
                <ButtonComponent
                    text={t('components.setup.step4.pushsaferForIos')}
                    to="https://apps.apple.com/es/app/pushsafer/id1096581405"
                    icon={
                        <FaAppStoreIos />
                    }
                />
                <ButtonComponent
                    text={t('components.setup.step4.pushsaferForAndroid')}
                    to="https://play.google.com/store/apps/details?id=com.pushsafer&hl=es&gl=US"
                    icon={<FaGooglePlay />}
                />
            </div>
        </div>
    )
}