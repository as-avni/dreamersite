import CustomCursor from "@/hooks/CustomCursor"
import EventsPage from "./events-page"
import Hero from "@/components/hero"
import "@/styles/global.css" // Ensure to import global styles here

export default function Home() {
    return (
        <main className="min-h-screen bg-white font-sans antialiased">
        <CustomCursor />
        <Hero />
        <EventsPage />
        </main>
    )
}
