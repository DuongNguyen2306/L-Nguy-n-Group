import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function NewsGrid() {
  const articles = [
    {
      id: "safira-khang-dien-mo-ban",
      title: "Safira Khang Điền chính thức mở bán với ưu đãi hấp dẫn",
      excerpt:
        "Dự án căn hộ cao cấp Safira Khang Điền tại Quận 9 chính thức mở bán với nhiều chương trình ưu đãi đặc biệt dành cho khách hàng.",
      date: "10/03/2024",
      category: "Dự án",
      image: "/placeholder.svg?key=n3ws2",
    },
    {
      id: "khang-dien-hop-tac-nhat-ban",
      title: "Khang Điền ký kết hợp tác với đối tác Nhật Bản",
      excerpt:
        "Công ty đã ký kết thỏa thuận hợp tác chiến lược với tập đoàn bất động sản hàng đầu Nhật Bản để phát triển các dự án cao cấp.",
      date: "05/03/2024",
      category: "Tin công ty",
      image: "/placeholder.svg?key=n3ws3",
    },
    {
      id: "dai-hoi-co-dong-2024",
      title: "Đại hội cổ đông thường niên 2024 thành công tốt đẹp",
      excerpt:
        "Đại hội đồng cổ đông thường niên năm 2024 đã diễn ra với sự tham gia của hơn 85% cổ đông, thông qua các nghị quyết quan trọng.",
      date: "28/02/2024",
      category: "Sự kiện",
      image: "/placeholder.svg?key=n3ws4",
    },
    {
      id: "khang-dien-phat-trien-ben-vung",
      title: "Khang Điền cam kết phát triển bền vững",
      excerpt: "Công ty công bố chiến lược phát triển bền vững với mục tiêu giảm 30% khí thải carbon vào năm 2030.",
      date: "20/02/2024",
      category: "Tin công ty",
      image: "/placeholder.svg?key=n3ws5",
    },
    {
      id: "verosa-park-tien-do",
      title: "Verosa Park đạt tiến độ vượt kế hoạch",
      excerpt:
        "Dự án Verosa Park Khang Điền đang được thi công với tiến độ vượt kế hoạch 15%, dự kiến bàn giao sớm hơn dự kiến.",
      date: "15/02/2024",
      category: "Dự án",
      image: "/placeholder.svg?key=n3ws6",
    },
    {
      id: "khang-dien-tu-thien",
      title: "Khang Điền trao tặng 100 căn nhà tình thương",
      excerpt:
        "Chương trình 'Mái ấm Khang Điền' đã trao tặng 100 căn nhà tình thương cho các hộ nghèo tại các tỉnh miền Tây.",
      date: "10/02/2024",
      category: "Sự kiện",
      image: "/placeholder.svg?key=n3ws7",
    },
    {
      id: "bao-chi-danh-gia-cao",
      title: "Báo chí đánh giá cao chiến lược phát triển của Khang Điền",
      excerpt:
        "Nhiều tờ báo uy tín đã có bài viết đánh giá cao chiến lược phát triển bền vững và chất lượng sản phẩm của Khang Điền.",
      date: "05/02/2024",
      category: "Truyền thông",
      image: "/placeholder.svg?key=n3ws8",
    },
    {
      id: "khang-dien-mo-rong-thi-truong",
      title: "Khang Điền mở rộng thị trường ra miền Trung",
      excerpt: "Công ty công bố kế hoạch đầu tư và phát triển các dự án bất động sản tại các tỉnh thành miền Trung.",
      date: "01/02/2024",
      category: "Tin công ty",
      image: "/placeholder.svg?key=n3ws9",
    },
    {
      id: "giai-thuong-thiet-ke",
      title: "Dự án Jamila nhận giải thưởng thiết kế xuất sắc",
      excerpt:
        "Dự án Jamila Khang Điền được vinh danh tại giải thưởng Asia Property Awards với hạng mục 'Thiết kế căn hộ xuất sắc'.",
      date: "25/01/2024",
      category: "Giải thưởng",
      image: "/placeholder.svg?key=n3ws10",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <Link href={`/news/${article.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>

                <Link href={`/news/${article.id}`}>
                  <h3 className="mb-3 text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 text-balance">
                    {article.title}
                  </h3>
                </Link>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-3 text-pretty">{article.excerpt}</p>

                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Đọc thêm
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
