import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const news = [
  {
    id: 1,
    title: "Thị trường bất động sản khu Đông Sài Gòn: Cơ hội vàng cho nhà đầu tư",
    excerpt: "Phân tích xu hướng và tiềm năng phát triển của thị trường BĐS tại TP Thủ Đức và khu vực lân cận",
    image: "/real-estate-market-analysis-charts.jpg",
    date: "15/01/2025",
    category: "Thị trường",
  },
  {
    id: 2,
    title: "Hướng dẫn mua bán nhà đất an toàn, tránh rủi ro pháp lý",
    excerpt: "Những lưu ý quan trọng khi giao dịch bất động sản để bảo vệ quyền lợi của bạn",
    image: "/business-meeting-presentation.jpg",
    date: "10/01/2025",
    category: "Hướng dẫn",
  },
  {
    id: 3,
    title: "Đất nền TP Thủ Đức: Giá trị gia tăng theo hạ tầng",
    excerpt: "Cập nhật các dự án hạ tầng mới và tác động đến giá trị bất động sản khu vực",
    image: "/modern-eco-residential-development.jpg",
    date: "05/01/2025",
    category: "Tin thị trường",
  },
  {
    id: 4,
    title: "Lê Nguyên Group đồng hành cùng khách hàng trong năm 2025",
    excerpt: "Cam kết mang đến dịch vụ tư vấn chuyên nghiệp và sản phẩm chất lượng cao",
    image: "/award-ceremony-real-estate.jpg",
    date: "02/01/2025",
    category: "Tin công ty",
  },
]

export function LatestNews() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Tin tức & Sự kiện</h2>
            <p className="text-lg text-muted-foreground">Cập nhật thông tin thị trường BĐS khu Đông Sài Gòn</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex bg-transparent">
            <Link href="/news">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.excerpt}</p>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <Link href={`/news/${item.id}`}>
                    Đọc thêm
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/news">
              Xem tất cả tin tức
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
