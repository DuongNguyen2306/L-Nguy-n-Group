import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StockInfo } from "@/components/investors/stock-info"
import { FinancialHighlights } from "@/components/investors/financial-highlights"
import { InvestorDocuments } from "@/components/investors/investor-documents"
import { ShareholderStructure } from "@/components/investors/shareholder-structure"
import { InvestorCalendar } from "@/components/investors/investor-calendar"
import { InvestorContact } from "@/components/investors/investor-contact"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=inv3st')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl text-balance">Quan Hệ Cổ Đông</h1>
              <p className="mt-4 text-lg text-white/90 text-pretty">
                Thông tin tài chính, báo cáo và tài liệu dành cho nhà đầu tư
              </p>
            </div>
          </div>
        </section>

        <StockInfo />
        <FinancialHighlights />
        <ShareholderStructure />
        <InvestorDocuments />
        <InvestorCalendar />
        <InvestorContact />
      </main>
      <Footer />
    </div>
  )
}
