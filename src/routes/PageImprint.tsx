import { useTranslation } from "react-i18next";
import { PageWrapper } from "../wrappers/PageWrapper";

export const PageImprint = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <div className="w-full px-2 md:px-[20vw]">
                <div className="w-full mt-[10dvh] mb-8 flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-5xl xl:text-6xl text-zinc-50 font-semibold text-center">
                        {t("pages.imprint.title")}
                    </h1>
                </div>

                <div className="flex flex-col gap-6 max-w-2xl mx-auto pb-12">
                    <section>
                        <h2 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-2">
                            {t("pages.imprint.responsible.title")}
                        </h2>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            Deniz Petzold<br />
                            c/o 36 IT-Solutions<br />
                            Hasenheide 94<br />
                            10967 Berlin<br />
                            Germany
                        </p>
                    </section>

                    <section>
                        <h2 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-2">
                            {t("pages.imprint.contact.title")}
                        </h2>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            <a
                                href="mailto:mail@dpetzold.dev"
                                className="text-primary hover:underline"
                            >
                                mail@dpetzold.dev
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-2">
                            {t("pages.imprint.liability.title")}
                        </h2>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            {t("pages.imprint.liability.body")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-2">
                            {t("pages.imprint.dataSource.title")}
                        </h2>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            {t("pages.imprint.dataSource.body")}
                        </p>
                    </section>
                </div>
            </div>
        </PageWrapper>
    );
};
