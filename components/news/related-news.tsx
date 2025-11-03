import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface RelatedNewsProps {
  currentArticleId: string
}

export function RelatedNews({ currentArticleId }: RelatedNewsProps) {
  const relatedArticles = [
    {
      id: "safira-khang-dien-mo-ban",
      title: "Safira Khang Điền chính thức mở bán với ưu đãi hấp dẫn",
      date: "10/03/2024",
      image: "/placeholder.svg?key=r3l1",
    },
    {
      id: "khang-dien-hop-tac-nhat-ban",
      title: "Khang Điền ký kết hợp tác với đối tác Nhật Bản",
      date: "05/03/2024",
      image: "/placeholder.svg?key=r3l2",
    },
    {
      id: "dai-hoi-co-dong-2024",
      title: "Đại hội cổ đông thường niên 2024 thành công tốt đẹp",
      date: "28/02/2024",
      image: "/placeholder.svg?key=r3l3",
    },
  ]

  return (
    <section className="border-t bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Tin tức liên quan</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Link href={`/news/${article.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <Link href={`/news/${article.id}`}>
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 text-balance">
                      {article.title}
                    </h3>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
