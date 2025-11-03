import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsFilter } from "@/components/projects/projects-filter"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=p9x2m')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl text-balance">Dự Án Của Chúng Tôi</h1>
              <p className="mt-4 text-lg text-white/90 text-pretty">
                Khám phá các dự án bất động sản chất lượng cao trên khắp Việt Nam
              </p>
            </div>
          </div>
        </section>

        <ProjectsFilter />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
