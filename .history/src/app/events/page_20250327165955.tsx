import Hero from "@/components/hero"
import MovingBanner from "@/components/banner"
import BillGatesSection from "@/components/bill-gates"
import AmazingSection from "@/components/amazing"
import QuickFormSection from "@/components/form"
import CustomCursor from "@/hooks/CustomCursor"
import EventsPage from "./events-page"

export default function Home() {
    return (
        <main className="min-h-screen bg-white font-sans antialiased">
            <CustomCursor />
        <Hero />
        {/* <MovingBanner />
        <BillGatesSection />
        <AmazingSection />
        <QuickFormSection /> */}
        <EventsPage />
        </main>
    )
}
