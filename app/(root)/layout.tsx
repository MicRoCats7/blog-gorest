import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <main className="flex-1 mt-20">{children}</main>
            <Footer />
            <ToastContainer />
        </div>
    );
}