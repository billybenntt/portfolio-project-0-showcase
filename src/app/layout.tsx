import type {Metadata} from 'next'
import '../styles/output.css'
import React from "react";
import Navbar from "@/components/Navbar";
import {latoSerif} from "@/styles/fonts/fonts";

export const metadata: Metadata = {
    title: 'Portfolio Showcase',
    description: 'Bill Portfolio',
}


type rootProps = {
    children: React.ReactNode
}


export default function RootLayout({children}: rootProps) {
    return (
        <html lang="en">
        <body className={latoSerif.className}>
            <Navbar/>
            {children}

        </body>
        </html>
    )
}
