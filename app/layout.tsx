import type React from "react"
import "./globals.css"
import { Josefin_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-josefin-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>Khoz - Find anything. Instantly.</title>
                <meta
                    name="description"
                    content="A lightning-fast file search app for macOS, built for speed and simplicity."
                />
            </head>
            <body className={`${josefinSans.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export const metadata = {
    generator: 'v0.dev'
};
