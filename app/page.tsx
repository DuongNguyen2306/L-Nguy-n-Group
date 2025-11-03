import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { CompanyIntro } from "@/components/company-intro"
import { FeaturedProjects } from "@/components/featured-projects"
import { LatestNews } from "@/components/latest-news"
import { ContactFormSection } from "@/components/contact-form-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <CompanyIntro />
        <FeaturedProjects />
        <LatestNews />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
