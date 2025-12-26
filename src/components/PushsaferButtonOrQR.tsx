import { generatePushsaferSignupLink } from "../utils/pushsafer";
import { ButtonComponent } from "./ButtonComponent";
import pushsaferLogo from "../assets/pushsafer.webp";
import { Trans, useTranslation } from "react-i18next";
import { useLanguage } from "../context/languageContext";
import QRCode from "react-qr-code";
import { Button } from "@heroui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

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
                <>
                    <h3 className="text-sm text-center text-zinc-200 text-balance mb-2">
                        {t('components.setup.step6.buttonTitle')}
                    </h3>
                    <Button
                        as={"a"}
                        startContent={
                            <img src={pushsaferLogo} alt="Pushsafer Logo" className="w-6 h-6" />
                        }
                        href={`intent://guest/${import.meta.env.VITE_PUSHSAFER_GUEST_ID}|${name}-${language.code}-${metric}-${Math.round(metricValue)}|#Intent;scheme=pushsafer;package=de.appzer.Pushsafer;end`}
                        target="_blank"
                        variant="bordered"
                    >
                        {t('components.setup.step6.addAaToPushsafer')}
                    </Button>
                </>
            )

        case "ios":
            return (
                <>
                    <h3 className="text-sm text-center text-zinc-200 text-balance mb-2">
                        {t('components.setup.step6.buttonTitle')}
                    </h3>

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
                </>
            )
        default:
            return (
                <>
                    <h3 className="text-sm text-center text-zinc-200 text-balance mb-2">
                        <Trans
                            i18nKey="components.setup.step6.qrCodeTitle"
                            components={{ arrow: <FaArrowRight className="text-blue-500 inline-block" /> }}
                        />
                    </h3>

                    <div className="w-full max-w-[180px] aspect-square mx-auto bg-white p-2 rounded-lg [&>svg]:w-full [&>svg]:h-full">
                        <QRCode
                            value={import.meta.env.VITE_PUSHSAFER_GUEST_ID + `|${name}-${language.code}-${metric}-${Math.round(metricValue)}|`}
                            title={t('components.setup.step6.qrCodeTitle')}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            fgColor="#000000"
                            bgColor="#ffffff"
                        />
                    </div>
                </>
            )
    }
}