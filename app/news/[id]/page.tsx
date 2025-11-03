import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsArticle } from "@/components/news/news-article"
import { RelatedNews } from "@/components/news/related-news"

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // In a real app, fetch article data based on id
  const article = {
    id,
    title: "Khang Điền nhận giải thưởng 'Nhà phát triển BĐS uy tín 2024'",
    date: "15/03/2024",
    category: "Giải thưởng",
    author: "Ban biên tập",
    image: "/placeholder.svg?key=art1cl3",
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsArticle article={article} />
        <RelatedNews currentArticleId={id} />
      </main>
      <Footer />
    </div>
  )
}
