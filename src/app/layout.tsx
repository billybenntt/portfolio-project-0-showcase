import {IBM_Plex_Mono} from 'next/font/google'
import type {Metadata} from 'next'
import '../styles/output.css'
import React from "react";
import Navbar from "@/components/Navbar";


const fontFamily = IBM_Plex_Mono({subsets: ['latin'], weight: ["400", "700"]})

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
        <body className={fontFamily.className}>
            <Navbar/>
            {children}
        </body>
        </html>
    )
}
