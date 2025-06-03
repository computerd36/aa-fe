import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { LogIn } from "lucide-react"
import { Link } from "react-router-dom"
import { ButtonComponent } from "./ButtonComponent"
import { useTranslation } from "react-i18next"
import { LanguageSelectorComponent } from "./LanguageSelectorComponent"



export const NavbarComponent = () => {
    const { t } = useTranslation();


    /**
    * Highlights the currently active menu item
    */
    const getLinkClass = (path: string) => {
        return location.pathname.endsWith(path) ? "text-primary font-medium" : "text-slate-500";
    };


    return (
        <Navbar
            isBordered
            className="bg-zinc-950 text-white border-b border-zinc-600"

        >
            <NavbarBrand>
                <Link to={'/'}>
                    <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary break-keep font-rubik font-medium text-inherit">AlertAigües</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link to={'/how'} className={`${getLinkClass('/how')}`}>{t('components.navbar.howItWorks')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/status'} className={`${getLinkClass('/status')}`}>{t('components.navbar.status')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={'/support'} className={`${getLinkClass('/support')}`}>{t('components.navbar.support')}</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LanguageSelectorComponent />
                </NavbarItem>
                <NavbarItem>
                    <ButtonComponent
                        icon={<LogIn />}
                        text={t('components.navbar.getStarted')}
                        to="/setup"
                        isPrimary
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}