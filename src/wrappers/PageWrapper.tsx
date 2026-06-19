import React from "react"
import { NavbarComponent } from "../components/NavbarComponent"
import { FooterComponent } from "../components/FooterComponent"

interface PageWrapperProps {
    children: React.ReactNode;
    isLanding?: boolean;
    hasFooter?: boolean;
}

export const PageWrapper = ({ children, isLanding = false, hasFooter = false }: PageWrapperProps) => {
    return (
        <div className={`relative min-h-dvh flex flex-col bg-background1 ${isLanding && 'overflow-hidden'}`}>
            <NavbarComponent />

            <div className={`flex flex-col items-center flex-grow ${isLanding ? 'px-0 py-0' : 'px-4 px-2 md:px-16 md:py-8'}`}>
                {children}
            </div>

            {hasFooter && <FooterComponent />}
        </div>
    )
}