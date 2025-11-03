import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyHistory } from "@/components/about/company-history"
import { MissionVision } from "@/components/about/mission-vision"
import { LeadershipTeam } from "@/components/about/leadership-team"
import { Achievements } from "@/components/about/achievements"
import { CompanyStats } from "@/components/about/company-stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/modern-office-building.png')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance">Về Lê Nguyên Group</h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl text-pretty">
                Đối tác tin cậy trong lĩnh vực tư vấn bất động sản tại TP Thủ Đức, TP.HCM. Chuyên cung cấp đất nền, nhà
                phố và căn hộ với dịch vụ tận tâm.
              </p>
            </div>
          </div>
        </section>

        <CompanyStats />
        <CompanyHistory />
        <MissionVision />
        <LeadershipTeam />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
