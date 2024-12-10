import Header from "@/components/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="lg:pt-[150px] pt-[120px]">
                {children}
            </main>
        </>
    );
}