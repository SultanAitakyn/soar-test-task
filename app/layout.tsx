import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './styles/globals.scss';

export const metadata = {
    title: 'Soar Task',
    description: 'Next.js App using App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{ display: 'flex', height: '100vh' }}>
                <Sidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: 'calc(100% - 250px)' }}>
                    <Navbar />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}