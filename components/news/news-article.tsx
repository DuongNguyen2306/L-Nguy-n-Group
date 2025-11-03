import { Calendar, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsArticleProps {
  article: {
    title: string
    date: string
    category: string
    author: string
    image: string
  }
}

export function NewsArticle({ article }: NewsArticleProps) {
  return (
    <article className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {article.category}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Chia sẻ
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="h-auto w-full" />
          </div>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>TP.HCM</strong> - Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền vinh dự được vinh danh tại
              lễ trao giải Vietnam Property Awards 2024 với danh hiệu "Nhà phát triển bất động sản uy tín nhất năm". Đây
              là sự ghi nhận xứng đáng cho những nỗ lực không ngừng của Khang Điền trong việc mang đến các sản phẩm bất
              động sản chất lượng cao cho khách hàng.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-foreground">Thành tựu đáng tự hào</h2>
            <p className="leading-relaxed text-muted-foreground">
              Giải thưởng Vietnam Property Awards là một trong những giải thưởng uy tín nhất trong ngành bất động sản
              Việt Nam, được tổ chức hàng năm để vinh danh các doanh nghiệp có đóng góp xuất sắc cho sự phát triển của
              thị trường. Việc Khang Điền được vinh danh ở hạng mục cao nhất là minh chứng cho chất lượng sản phẩm, dịch
              vụ và uy tín của công ty.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Trong năm 2023, Khang Điền đã hoàn thành và bàn giao hơn 2,000 căn hộ cho khách hàng, đồng thời khởi công
              3 dự án mới với tổng vốn đầu tư hơn 5,000 tỷ đồng. Tất cả các dự án đều được thiết kế theo tiêu chuẩn quốc
              tế, tích hợp công nghệ smart home và cam kết phát triển bền vững.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-foreground">Cam kết với khách hàng</h2>
            <p className="leading-relaxed text-muted-foreground">
              Phát biểu tại lễ trao giải, ông Nguyễn Văn A - Chủ tịch HĐQT Khang Điền cho biết: "Giải thưởng này là động
              lực to lớn để chúng tôi tiếp tục nỗ lực mang đến những sản phẩm bất động sản chất lượng cao, đáp ứng nhu
              cầu ngày càng cao của khách hàng. Chúng tôi cam kết sẽ không ngừng đổi mới, sáng tạo và luôn đặt lợi ích
              của khách hàng lên hàng đầu."
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Trong thời gian tới, Khang Điền sẽ tiếp tục mở rộng quy mô hoạt động, phát triển các dự án tại nhiều tỉnh
              thành trên cả nước, đồng thời tăng cường ứng dụng công nghệ và các giải pháp xanh trong các dự án để góp
              phần xây dựng một môi trường sống bền vững cho cộng đồng.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-foreground">Định hướng tương lai</h2>
            <p className="leading-relaxed text-muted-foreground">
              Với chiến lược phát triển dài hạn, Khang Điền đặt mục tiêu trở thành một trong 5 nhà phát triển bất động
              sản hàng đầu Việt Nam vào năm 2030. Công ty sẽ tập trung vào các phân khúc căn hộ cao cấp, khu đô thị
              thông minh và các dự án phát triển bền vững, đáp ứng xu hướng của thị trường và nhu cầu của khách hàng.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">Khang Điền</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">Giải thưởng</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">Bất động sản</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">Vietnam Property Awards</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
