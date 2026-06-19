import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FooterComponent = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-800 bg-zinc-950 mt-16">
            <div className="w-full px-4 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-zinc-500 text-xs">
                    {t("components.footer.copyright", { year })}
                </p>
                <Link
                    to="/imprint"
                    className="text-zinc-400 hover:text-zinc-200 text-xs transition-colors"
                >
                    {t("components.footer.imprint")}
                </Link>
            </div>
        </footer>
    );
};
