import CustomCursor from "@/hooks/CustomCursor"
import EventsPage from "./events-page"

export default function Home() {
    return (
        <main className="min-h-screen bg-white font-sans antialiased">
        <CustomCursor />
        <EventsPage />
        </main>
    )
}
