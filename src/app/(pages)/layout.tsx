import { PropsWithChildren } from "react";
import Header from "./_components/partials/Header";
import Footer from "./_components/partials/Footer";

export default async function PagesLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header/>
            {children}
            <Footer />
        </>
    );
}
