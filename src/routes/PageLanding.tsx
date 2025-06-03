import { BookText, LogIn } from "lucide-react"

// images 
import logoSAIH from "../assets/saihebro.svg"

import { PageWrapper } from "../wrappers/PageWrapper"
import { ButtonComponent } from "../components/ButtonComponent"
import { WaveComponent } from "../components/WaveComponent"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"


export const PageLanding = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper isLanding>
            <div className="w-full h-[calc(70dvh-4rem)] flex flex-col items-start justify-center px-8 py-16">
                <motion.div
                    className="w-full h-full sm:w-2/3 md:w-2/3 3xl:w-1/3 flex flex-col items-center justify-center mx-auto"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ type: "spring", stiffness: 200, duration: 0.3 }}
                >
                    <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium text-center text-zinc-50 pb-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t('pages.landing.realTimeAlerts')}</span><br />{t('pages.landing.viaYourPhone')}</h1>
                    <h2 className="text-sm md:text-md xl:text-xl 2xl:text-2xl text-center text-zinc-200 text-balance">{t('pages.landing.subtitle')}</h2>
                    <div className="w-full flex gap-4 mt-4 justify-center">
                        <ButtonComponent
                            icon={<LogIn />}
                            text={t('pages.landing.getStarted')}
                            to="/setup"
                            isPrimary
                        />
                        <ButtonComponent
                            icon={<BookText />}
                            text={t('pages.landing.learnMore')}
                            to="/how"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center mt-8 gap-8">
                        <div>
                            <h3 className="text-xs text-center text-zinc-200">{t('pages.landing.dataProvidedBy')}</h3>
                            <a href="https://www.saihebro.com" target="_blank" rel="noreferrer">
                                <img src={logoSAIH} alt="logo" className="mt-2 mx-auto h-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <WaveComponent />
        </PageWrapper>
    )
}