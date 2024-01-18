"use client"
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <NextUIProvider>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </NextUIProvider>
    )
}
