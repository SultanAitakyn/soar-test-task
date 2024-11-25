import './styles/globals.scss';
import {LayoutWrapper} from "./components/Layout";
import {ReactNode} from "react";

export const metadata = {
    title: 'Soar Task',
    description: 'Soar Test Task',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        </body>
        </html>
    );
}