import {Metadata} from 'next'
import {ThemeProvider} from 'next-themes'

export const metadata: Metadata = {
    title: 'TYIC 桃高資訊社',
    description: 'Powered by TYIC 桃高資訊社',
    icons: '/tyic_logo.ico'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh" suppressHydrationWarning>
        <body><ThemeProvider>{children}</ThemeProvider></body>
        </html>
    );
}