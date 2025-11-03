import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsGrid } from "@/components/news/news-grid"
import { FeaturedNews } from "@/components/news/featured-news"

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=n3ws1')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl text-balance">Tin Tức & Sự Kiện</h1>
              <p className="mt-4 text-lg text-white/90 text-pretty">
                Cập nhật tin tức mới nhất về công ty và ngành bất động sản
              </p>
            </div>
          </div>
        </section>

        <FeaturedNews />
        <NewsFilter />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}
