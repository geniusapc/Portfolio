"use client"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import SideBar from "../component/SideNav/SideBar";
config.autoAddCss = false;
import "./globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body >
                <div className="h-screen w-full">
                    <SideBar />
                    <div className="p-4 md:px-32 h-full pt-12 md:pt-16  relative overflow-hidden">
                        <div className="absolute  bg-[url('/img/bg2.svg')]  bg-opacity-10 inset-0  bg-cover bg-center"></div>
                        <div className="relative h-full">
                            {children}
                        </div>
                    </div>
                </div>

            </body>
        </html>
    )
}