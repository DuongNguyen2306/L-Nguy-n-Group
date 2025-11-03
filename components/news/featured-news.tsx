import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedNews() {
  const featuredArticle = {
    id: "khang-dien-nhan-giai-thuong-2024",
    title: "Khang Điền nhận giải thưởng 'Nhà phát triển BĐS uy tín 2024'",
    excerpt:
      "Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền vinh dự được vinh danh tại lễ trao giải Vietnam Property Awards 2024 với danh hiệu 'Nhà phát triển bất động sản uy tín nhất năm'.",
    date: "15/03/2024",
    category: "Giải thưởng",
    image: "/placeholder.svg?key=f34t1",
  }

  return (
    <section className="border-b py-12">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {featuredArticle.category}
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl text-balance">
                {featuredArticle.title}
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed text-pretty">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <Button asChild>
                  <Link href={`/news/${featuredArticle.id}`}>
                    Đọc thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
