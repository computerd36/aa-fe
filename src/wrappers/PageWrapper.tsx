import React from "react"
import { NavbarComponent } from "../components/NavbarComponent"

interface PageWrapperProps {
    children: React.ReactNode;
    isLanding?: boolean;
}

export const PageWrapper = ({ children, isLanding }: PageWrapperProps) => {
    return (
        <div className={`relative min-h-screen flex flex-col bg-zinc-950 ${isLanding ? '' : 'pb-4'}`}>
            <NavbarComponent />

            <div className={`flex flex-col items-center flex-grow ${isLanding ? 'px-0 py-0' : 'px-16 py-8'}`}>
                {children}
            </div>
        </div>
    )
}