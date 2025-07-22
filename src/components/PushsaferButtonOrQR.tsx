import { generatePushsaferSignupLink } from "../utils/pushsafer";
import { ButtonComponent } from "./ButtonComponent";
import pushsaferLogo from "../assets/pushsafer.webp";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/languageContext";
import QRCode from "react-qr-code";



export interface PushsaferButtonOrQRProps {
    // NAME PROPS
    name: string;
    metric: string;
    metricValue: number;
    // INTENT PROPS
    device: "android" | "ios" | "pc";
}

export const PushsaferButtonOrQR: React.FC<PushsaferButtonOrQRProps> = ({
    name,
    metric,
    metricValue,
    device,
}) => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    switch (device) {
        case "android":
            return (
                <a href={`intent://guest/${import.meta.env.VITE_PUSHSAFER_GUEST_ID}|${name}-${language.code}-${metric}-${metricValue}|#Intent;scheme=pushsafer;package=de.appzer.Pushsafer;end`}>
                    Add to Pushsafer (Android)
                </a>
            )

        case "ios":
            return (
                <ButtonComponent
                    to={generatePushsaferSignupLink(name, language.code, metric, metricValue)}
                    text={t('components.setup.step6.addAaToPushsafer')}
                    icon={
                        <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                    }
                    isPrimary
                    isLoading={false}
                    targetBlank
                />
            )
        default:
            return (
                <>
                    <h3 className="text-sm text-center text-zinc-200 text-balance mb-2">{t('components.setup.step6.qrCodeTitle')}</h3>
                    <QRCode
                        size={256}
                        value={import.meta.env.VITE_PUSHSAFER_GUEST_ID + `|${name}-${language.code}-${metric}-${metricValue}|`}
                        className="max-w-64 max-h-64"
                        title={t('components.setup.step6.qrCodeTitle')}
                        fgColor="#ffffff"
                        bgColor="#0b0b0e"
                    />
                </>
            )
    }
}

