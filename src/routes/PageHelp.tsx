import { Accordion, AccordionItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../wrappers/PageWrapper";
import { LuDatabase, LuExternalLink, LuGithub, LuHeart, LuMail, LuShieldAlert, LuSmartphone } from "react-icons/lu";

const faqIcons = [
    <LuSmartphone size={20} key="smartphone" />,
    <LuDatabase size={20} key="database" />,
    <LuShieldAlert size={20} key="shield" />,
    <LuHeart size={20} key="heart" />,
];

const faqKeys = ["iosAndroid", "dataSource", "safety", "whyBuilt"] as const;

export const PageHelp = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] mb-12 flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-5xl xl:text-6xl text-zinc-50 font-semibold text-center">
                        {t("pages.help.title.prefix")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">
                            AlertAigua
                        </span>
                    </h1>
                    <h2 className="text-md md:text-lg xl:text-xl text-zinc-400 text-center mt-4 text-balance max-w-2xl">
                        {t("pages.help.subtitle")}
                    </h2>
                </div>

                <Accordion
                    variant="splitted"
                    className="gap-3 px-0"
                    itemClasses={{
                        base: "bg-zinc-900 border border-zinc-800 rounded-xl",
                        title: "text-zinc-100 font-medium text-base",
                        content: "text-zinc-400 pb-4 leading-relaxed",
                        trigger: " py-4",
                        indicator: "text-zinc-500",
                    }}
                >
                    {faqKeys.map((key, index) => (
                        <AccordionItem
                            key={key}
                            title={t(`pages.help.faq.${key}.question`)}
                            startContent={
                                <span className="text-primary">{faqIcons[index]}</span>
                            }
                        >
                            {t(`pages.help.faq.${key}.answer`)}
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Support section */}
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-5">
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-3">
                        {t("pages.help.support.title")}
                    </p>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {t("pages.help.support.description")}
                    </p>
                    <div className="flex flex-col divide-y divide-zinc-800">
                        <a
                            href="https://github.com/computerd36/aa-fe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 py-3 text-zinc-300 hover:text-zinc-100 transition-colors group"
                        >
                            <LuGithub size={15} className="text-primary shrink-0" />
                            <span className="text-sm">GitHub — {t("pages.help.support.frontend")}</span>
                            <LuExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400 ml-auto transition-colors" />
                        </a>
                        <a
                            href="https://github.com/computerd36/aa-be"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 py-3 text-zinc-300 hover:text-zinc-100 transition-colors group"
                        >
                            <LuGithub size={15} className="text-primary shrink-0" />
                            <span className="text-sm">GitHub — {t("pages.help.support.backend")}</span>
                            <LuExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400 ml-auto transition-colors" />
                        </a>
                        <a
                            href="mailto:mail@dpetzold.dev"
                            className="flex items-center gap-3 py-3 text-zinc-300 hover:text-zinc-100 transition-colors group"
                        >
                            <LuMail size={15} className="text-primary shrink-0" />
                            <span className="text-sm">mail@dpetzold.dev</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
