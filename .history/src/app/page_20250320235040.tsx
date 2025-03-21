import Hero from "@/components/hero"
import MovingBanner from "@/components/banner"
import BillGatesSection from "@/components/bill-gates"
import AmazingSection from "@/components/amazing"
import QuickFormSection from "@/components/quick-form-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Hero />
      <MovingBanner />
      <BillGatesSection />
      <AmazingSection />
      <QuickFormSection />
    </main>
  )
}

